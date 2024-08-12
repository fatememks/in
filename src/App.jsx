import { FaBell } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="p-10 flex items-center justify-center bg-gradient-to-tr from-cyan-100 via-cyan-300 to-emerald-200 w-full h-screen">
        <div className="flex flex-col h-full max-h-[550px] bg-gray-50 w-full max-w-[900px] rounded-2xl overflow-hidden border shadow p-3">
          <header>
            <img src="../public/hed.png" alt="" className="w-28" />
          </header>
          <div className="flex flex-row items-center justify-center gap-6 h-full">
            <div className="h-full flex items-center justify-center">
              <img src="../public/login.png" alt="" />
            </div>
            <div className="w-[450px] flex flex-col gap-5 px-5">
              <h1 className="text-4xl">Welcome Back :)</h1>
              <p className="text-justify text-gray-700 text-xs">
                To keep connected to us Please login with your personal information buy email address and password 
                <FaBell className="text-amber-300" />
              </p>
              <form action="" className="flex flex-col gap-5 w-full">
                <div className="flex flex-col w-full">
                  <div className="relative">
                    <AiOutlineMail  className="text-stone-500 w-12 size-8 flex items-center justify-center absolute top-2 left-1"/>
                    <input type="text" className="w-full h-12 rounded-t-lg bg-stone-200/50 py-2 pl-16 pr-3 placeholder:text-xs" placeholder="Email address" />
                  </div>
                  <div className="relative">
                    <RiLockPasswordLine  className="text-stone-500 w-12 size-8 flex items-center justify-center absolute top-2 left-1"/>
                    <input type="text" className="w-full h-12 rounded-b-lg bg-stone-200/50 py-2 pl-16 pr-3 placeholder:text-xs" placeholder="Email address" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between text-gray-500 text-xs w-full">
                  <div className="flex flex-row gap-1">
                    <input type="checkbox" id="remember" name="remember" className=""/>
                    <p>Remember Me</p>
                  </div>
                  <a href="">Forget Password?</a>
                </div>
                <div className="flex flex-row items-center gap-4 text-sm">
                  <button className="px-5 py-2 bg-blue-500 rounded-full text-gray-50">Login Now</button>
                  <button className="px-5 py-2 bg-gray-50 rounded-full text-gray-900 border">Create Account</button>
                </div>
              </form>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-gray-500">Or you can join with</p>
                <div className="flex flex-row gap-3 text-gray-100">
                  <div className="size-9 rounded-full border flex items-center justify-center">
                    <FcGoogle className="size-5"/>
                  </div>
                  <div className="size-9 rounded-full bg-blue-800 flex items-center justify-center">
                    <FaFacebookF className="size-5"/>
                  </div>
                  <div className="size-9 rounded-full bg-blue-300 flex items-center justify-center">
                    <FaTwitter className="size-5"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
