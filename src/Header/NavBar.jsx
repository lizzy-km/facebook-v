import React, { useEffect } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import MidMenu from "./MidMenu";
import RightMenu from "./RightMenu";

const NavBar = () => {
  




  
  

  return (
    <div className=" z-[99] p-1 max-[500px]:w-full   flex justify-center items-center fixed top-3 max-[500px]:top-0 rounded-full max-[500px]:h-auto h-[60px] w-[95%] ">
      <div className=" max-[500px]:flex-col-reverse  max-[500px]:gap-2 flex justify-between items-center px-[0.5rem]   rounded-full h-full w-full ">
        <Search />
        <MidMenu/>
        <RightMenu/>
      </div>
    </div>
  );
};

export default NavBar;
