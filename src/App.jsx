import { FaBell } from "react-icons/fa";
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
            <div className="w-[450px] flex flex-col gap-4 px-5">
              <h1 className="text-4xl">Welcome Back :)</h1>
              <p className="text-justify text-gray-700 text-xs">
                To keep connected to us Please login with your personal information buy email address and password 
                <FaBell className="text-amber-300" />
              </p>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
