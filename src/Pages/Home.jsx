import React from "react";
import UserPostCard from "../Components/UserPostCard";

const Home = () => {
  const loading = false;

  if (loading) {
    return (
      <div className="  flex justify-between gap-1 items-start  w-[96%] rounded-[20px] p-[1rem] ">
        <div className="bg-blur animate-pulse  rounded-xl w-[25%] h-full "></div>
        <div className="  flex gap-3 flex-col justify-start items-start navBar-2 p-2 rounded-2xl w-[50%] h-auto ">
          <div className="flex w-full  gap-2 h-auto flex-col">
            <div className="navBar-2 animate-pulse p-2 rounded-xl bg-[#484747da] w-full h-[220px] ">
              <div className="   rounded-xl bg-blur w-full h-full "></div>
            </div>
            <div className=" animate-pulse navBar-2 p-2 rounded-xl bg-[#484747da] w-full h-[170px] ">
              <div className="  rounded-xl bg-blur w-full h-full "></div>
            </div>
          </div>

          <div className=" gap-2 flex flex-col w-full h-auto justify-start items-center ">
            <UserPostCard />

            <UserPostCard />

            <div className=" animate-pulse navBar-2 p-2 rounded-xl bg-[#484747da] w-full h-[435px] ">
              <div className="  rounded-xl bg-blur w-full h-full "></div>
            </div>
          </div>

          <div className=" animate-pulse navBar-2 p-2 bg-[#484747da] rounded-xl flex justify-center items-center  w-full h-[100px] ">
            <div className=" flex justify-center items-center rounded-xl bg-blur w-full h-full ">
              <p className=" text-xl font-medium ">You're all catch up!</p>
            </div>
          </div>
        </div>
        <div className="bg-blur rounded-xl w-[25%] h-full "></div>
      </div>
    );
  } else {
    return (
      <div className=" max-[500px]:flex-col max-[500px]:w-full  flex justify-between gap-1 items-start  w-[96%] rounded-[20px] p-[1rem] ">
        <div className="bg-blur p-2 rounded-xl  flex w-[30%] h-full ">
       
        </div>
        <div className=" max-[500px]:w-full flex gap-3 flex-col justify-start items-start rounded-2xl w-[40%] h-auto ">
          <div className="flex w-full gap-2 h-auto flex-col">
            <div className="navBar  p-2 rounded-xl bg-[#3e3e3e9f] w-full h-[220px] ">
              <div className=" navBar rounded-xl bg-blur w-full h-full "></div>
            </div>
            <div className=" navBar p-2 rounded-xl bg-[#3e3e3e9f] w-full h-[170px] ">
              <div className=" navBar rounded-xl bg-blur w-full h-full "></div>
            </div>
          </div>

          <div className=" gap-2 flex flex-col w-full h-auto justify-start items-center ">
            <UserPostCard />

            <UserPostCard />

            <div className=" navBar p-2 rounded-xl bg-[#3e3e3e9f] w-full h-[435px] ">
              <div className=" navBar  rounded-xl bg-blur w-full h-full "></div>
            </div>
          </div>

          <div className=" navBar p-2 bg-[#3e3e3e9f] rounded-xl flex justify-center items-center  w-full h-[100px] ">
          <div className="navBar  rounded-xl bg-blur flex justify-center items-center w-full h-full ">
          <p className=" text-xl bg-blur font-medium ">You're all catch up!</p>
          </div>
            
          </div>
          <div className=" max-[500px]:h-[100px] w-full " >
            
          </div>
        </div>
        <div className="bg-blur rounded-xl w-[30%] h-full ">
          
        </div>
      </div>
    );
  }
};

export default Home;
