
import { useEffect, useRef, useState } from "react"
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
const App = () => {
  const [timer, setTimer] = useState(0)
  const [isRunning,setIsrunning]=useState(false)
  const hours = Math.floor(timer / 3600)
  const minutes = Math.floor((timer % 3600) / 60)
  const seconds = timer % 60
  const timeHandler = useRef(() => setTimer((prev) => prev + 1), [])

  useEffect(() => {
    let id;
    if(isRunning){
       id = setInterval(timeHandler.current, 1000)

    }
   

    return () => clearInterval(id)
  }, [isRunning])


  return (
    <div className="w-screen h-screen  flex flex-col sm:items-center justify-center bg-black">


      <div className="max-w-screen-sm flex justify-center items-center text-[#e4f230] text-6xl font-orbitron sm:text-8xl">
        <div>{String(hours).padStart(2, '0')}:</div>
        <div>{String(minutes).padStart(2, '0')}:</div>
        <div>{String(seconds).padStart(2, '0')}</div>
        
      </div>
      <div className="w-[45%] mt-10 text-white sm:text-4xl flex justify-around font-roboto flex-wrap">
         <button className="ml-5 border-2 border-transparent transition-all duration-300  rounded-3xl px-6 hover:border-white flex gap-2 items-center " onClick={()=>setIsrunning(true)} ><span className="sm:text-2xl"><FaRegPlayCircle /></span> Start</button>
         <button className="ml-5 border-2 border-transparent  transition-all duration-300  rounded-3xl px-6 hover:border-white flex gap-2 items-center" onClick={()=>setIsrunning(false)} ><span className="sm:text-2xl"><FaRegStopCircle /></span>Stop</button>
         <button className="ml-5 border-2 border-transparent  transition-all duration-300  rounded-3xl px-6 hover:border-white flex gap-2 items-center" onClick={()=>{setTimer(0);setIsrunning(false)}} ><span className="sm:text-2xl"><LuTimerReset /></span>Reset</button>
      </div>
    </div>

  )
}

export default App