import { useRef } from "react";
import Modal from "./index";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../firebase";
import { toast } from "react-toastify";


const ResetModal = ({isOpen, close}) => {

  const emailInputRef = useRef(null);
  
  const handleClick = () => {
    // inputteaki mail adresine erişme
    const email = emailInputRef.current.value;

    // mail yazılmadıysa fonksiyonu durdur
    if(!email.trim()) return toast.warning("Lütfen mail adresinizi giriniz");

    // şifre sıfrlama maili gönderiyoruz
    sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.info("Mailinize şifre sıfırlama bağlantısı gönderildi")
      close();
    })
    .catch(() => {
      toast.error("Opppss bi sorun oluştu. Mail gönderilemedi");
    });
  };

    return (
        
        <Modal isOpen={isOpen} close={close}>
            
            <div className="flex flex-col mx-auto  gap-3 max-w-[350px] mt-5"> 
                <h1 className="text-3xl ">Şifreni mi unuttun?</h1>
                <p className="text-zinc-400">E-mail adresine bir şifre sıfırlama bağlantısı gönderilecek</p>

                <input 
                ref={emailInputRef}
                 type="email" 
                 className="input mt-10 " placeholder="Mailinizi giriniz..." />

                <button
                onClick={handleClick}
                 type="button"
                 className="bg-white hover:bg-gray-300  transition text-black rounded-full mt-8 py-1 cursor-pointer" > 
                    
                    Şifre sıfırlama maili gönder
                </button>

                <button 
                onClick={close}
                 className="bg-zinc-500 hover:bg-zinc-600 text-white rounded-full mt-3 py-1 cursor-pointer">İptal</button>
                 </div>

        </Modal>
        
    );
};



export default ResetModal;

