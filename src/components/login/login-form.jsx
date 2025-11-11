import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import ForgotPassword from "./forgot-password";
import SubmitButton from "./submit-button";
import AuthToggle from "./auth-toggle";
import { useState } from "react";
import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // formdaki verilere eriş
    const formData = new FormData(e.target);
    const {email, password } = Object.fromEntries(formData.entries());

   try {
     if(isLoginMode){
      // giriş yapma modundaysak 
      const res = await signInWithEmailAndPassword(auth, email, password);

      // mailin doğrulamamış ise bildiirm gönder
      if(!res.user.emailVerified) {
        return toast.info("Lütfen mailinizi doğrulayın");
      }
      
      
// mailini doğrulamış ise ansayfaya yönlendir
      navigate("/feed");
      toast.success("Hesaba giriş yapıldı");

    

     }else{
      // kayıt lma modundaysak
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      // doğrulama epostası gönder
      await sendEmailVerification(res.user);


      // giriş yapma moduna geç
      setIsLoginMode(true);

      // bildirim gönderme
      toast.info("Mailinize doğrulama e-postası gönderildi");
     }
   }catch (error) {
    toast.error(error.message);

   }
  };



  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isLoginMode={isLoginMode} />

      <SubmitButton isLoginMode={isLoginMode} />

      <AuthToggle  isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode}/>

      
    </form>
  );
};

export default LoginForm;
