import RightFun from "./RightFun";
import MenuData from "./MenuData";
import NotiData from "./NotiData";

const RightMenu = () => {

  const {right,setRight,menu,setMenu} = RightFun()

 
  

  return (
    <div className="  relative max-[500px]:h-[0px] max-[500px]:w-[0px]    rounded-full w-[30%]  h-full flex justify-end  items-center ">
      <div className=" bg-[#3e3e3e57]   navBar rounded-full p-2  w-[70%] h-full flex justify-between items-center ">
        <div id="allMenu" className=" rounded-full bg-[#212121] p-[2px]  max-[500px]:w-0  max-[500px]:p-0 min-w-[30px] h-[100%]  cursor-pointer flex justify-center items-center "  >
            <img className=" bg-blur  h-[100%] rounded-full navBar " src="/src/assets/Menu.svg" alt="" />
        </div>
        <div id="msg"className=" rounded-full bg-[#212121] p-[2px]  max-[500px]:w-0  max-[500px]:p-0 min-w-[30px] h-[100%]  cursor-pointer flex justify-center items-center "  >
            <img className=" bg-blur h-[100%] rounded-full navBar " src="/src/assets/Messenger.svg" alt="" />
        </div>
        <div id="noti" onClick={()=> setRight(!right)} className=" rounded-full  p-[2px]  max-[500px]:w-0  max-[500px]:p-0 min-w-[30px] h-[100%]  cursor-pointer flex justify-center items-center " >
            <img className="  max-[500px]:w-0 h-[100%]  max-[500px]:p-0 bg-blur rounded-full navBar " src="/src/assets/Noti.svg" alt="" />
        </div>
        <div id="userMenu" onClick={()=>setMenu(!menu)} className=" rounded-full  p-[2px]  max-[500px]:w-0  max-[500px]:p-0 min-w-[30px] h-[100%]  cursor-pointer flex justify-center items-center "  >
            <img className=" bg-blur w-[30px] h-[100%]  object-cover rounded-full navBar " src="/src/assets/bg.jpg" alt="" />
        </div>
        
      </div>

      <NotiData/>

     <MenuData/>
    </div>
  );
};

export default RightMenu;
