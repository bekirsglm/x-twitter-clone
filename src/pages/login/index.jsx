import GoogleButton from "../../components/login/google-button";
import LoginFrom from "../../components/login/login-form";



const Login = () => {
  return (
    <div className="h-screen bg-dark text-white grid place-items-center px-4">
        <div className="bg-black py-6 px-28 rounded-lg flex flex-col gap-10 sn:w-[80%] *:max-w-[550px]">
            <div className="flex justify-center ">
                <img src="/x-logo.webp" alt="x-logo"  className="h-[60px]" />
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-center" >Twitter'a Giriş Yap</h1>

            <GoogleButton />


            <LoginFrom /> 
        </div>
    </div>

  );
};

export default Login;
