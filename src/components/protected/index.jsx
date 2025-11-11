import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { auth } from "../../firebase";
import PageLoader from "../loader/page-loader";
import { toast } from "react-toastify";




const Protected = () => {
const [user, setUser] = useState(undefined);


  useEffect(() => {
    // oturum verisine abone olma
    const unsub = onAuthStateChanged(auth, (activeUser) => setUser(activeUser));

    // kullanıcı sayfandan ayrılınc aboneliği sonlandırma
    return () => unsub();
  
  }, []);

  // oturum verisi gelene kadar loader bas
 if( user === undefined) return <PageLoader />

 // kualnıcı oturumu kapalıysa veya email doğrulanmadıysa logine yçnlendir
 if(user === null || user.emailVerified === false ){
if(user && user.emailVerified=== false) toast.info("Mailinizi Doğrulayınız");

  // anasayfaya yönlendir 
  return <Navigate to="/" replace />;
 }


 // kullancınn oturumu açıksa sayfayı göster
      return <Outlet context={user} />;
};

export default Protected;
