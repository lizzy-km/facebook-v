
const MenuData = () => {
  return (
    <div id='menuData' className=" absolute p-0 w-full min-h-[0px] h-[0px] transition-all flex justify-center items-center navBar bg-[#3e3e3e57] top-[110%] rounded-3xl   " >
    <div id='mData' className=" gap-2 flex flex-col p-[1rem] navBar opacity-0 transition-all bg-blur w-full h-full  rounded-[20px] " >
      <div id="user" className=" text-[#cfcdcd] flex w-full justify-between items-center px-3 py-2 bg-[#191919b4] cursor-pointer transition-all hover:bg-[#121212e5] rounded-xl " >
       
        <div className=" flex justify-center gap-3 items-center " >
        <img className=" navBar-2 bg-[#151414] p-[6px] rounded-full" src="/src/assets/User.svg" alt="" />
        <p>Vince</p>
        </div>

        <div className=" flex p-[2px] justify-center items-center cursor-pointer bg-blue-700 rounded-full " >
        <img className=" bg-[#212121] p-[3px] rounded-full " src="/src/assets/User.svg" alt="" />
        </div>
      </div>
      <div className=" w-full p-2 flex justify-center items-center " >
        <span className=" w-full h-[2px] rounded-full bg-[#333333] " />
      </div>
      <div className=" text-[#cfcdcd] flex w-full justify-start gap-3 items-center px-3 py-2 bg-[#191919b4] cursor-pointer transition-all hover:bg-[#121212e5] rounded-xl " >
         <div className=" navBar-2 bg-[#151414] p-[6px] rounded-full " >
         <img className=" p-[3px] w-[24px]  " src="/src/assets/Setting.svg" alt="" />

         </div>
            <p>Setting</p>
        </div>
        <div className=" text-[#df4040] flex w-full justify-start gap-3 items-center px-3 py-2 bg-[#191919b4] cursor-pointer transition-all hover:bg-[#121212e5] rounded-xl " >
         <div className=" navBar-2 bg-[#151414] p-[6px] rounded-full " >
         <img className=" p-[3px] w-[24px]  " src="/src/assets/Logout.svg" alt="" />

         </div>
            <p>Logout</p>
        </div>
    </div>
  </div>
  )
}

export default MenuData
