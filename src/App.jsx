import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import NavBar from './Header/NavBar'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <div className='   flex w-full overflow-y-auto max-h-screen justify-center  '>
      <img className='  fixed z-[-1] h-full w-full object-cover bg-center ' src="/src/assets/bg.jpg" alt="" />
      <BrowserRouter>
      <NavBar/>
      <div className="  w-full h-auto text-[#ffffffa7] flex justify-center mt-[80px] " >
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/*'} element={<NotFound />} />
      </Routes>
      </div>
     
      </BrowserRouter>
      
    </div>
  )
}

export default App
