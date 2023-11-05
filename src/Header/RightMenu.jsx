import React, { useEffect, useState } from "react";
import RightFun from "./RightFun";
import MenuData from "./MenuData";
import NotiData from "./NotiData";

const RightMenu = () => {

  const {right,setRight,menu,setMenu} = RightFun()

 
  

  return (
    <div className=" navBar relative max-[500px]:h-[0px] max-[500px]:w-[0px] bg-[#3e3e3e57]    rounded-full w-[30%]  h-full flex justify-between items-center ">
      {/* <div className="  navBar rounded-full p-0  w-[100%] h-full flex justify-between items-center "> */}
        <div className=" max-[500px]:w-0  max-[500px]:p-0 w-[100%] h-[100%] p-[8px] cursor-pointer flex justify-center items-center " >
            <img className=" bg-blur  h-[100%] rounded-full navBar " src="/src/assets/Menu.svg" alt="" />
        </div>
        <div className=" max-[500px]:w-0  max-[500px]:p-0 w-[100%] h-[100%] p-[8px] cursor-pointer flex justify-center items-center " >
            <img className=" bg-blur h-[100%] rounded-full navBar " src="/src/assets/Messenger.svg" alt="" />
        </div>
        <div onClick={()=> setRight(!right)} className="  max-[500px]:w-0  max-[500px]:p-0 w-[100%] h-[100%] p-[8px] cursor-pointer flex justify-center items-center " >
            <img className="  max-[500px]:w-0 h-[100%]  max-[500px]:p-0 bg-blur rounded-full navBar " src="/src/assets/Noti.svg" alt="" />
        </div>
        <div onClick={()=>setMenu(!menu)} className="  max-[500px]:w-0  max-[500px]:p-0 w-[100%] h-[100%] p-[8px] cursor-pointer flex justify-center items-center " >
            <img className=" bg-blur w-[40px] h-[100%]  object-cover rounded-full navBar " src="/src/assets/bg.jpg" alt="" />
        </div>
        
      {/* </div> */}

      <NotiData/>

     <MenuData/>
    </div>
  );
};

export default RightMenu;
