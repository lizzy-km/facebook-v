import { NavLink } from "react-router-dom";

const MidMenu = () => {
  return (
    <div className=" max-[500px]:absolute bottom-[-87vh] max-[500px]:z-[-1] max-[500px]:w-full bg-[#3e3e3e9f] navBar p-2 rounded-full w-[40%] max-[500px]:h-[60px] h-full flex justify-center items-center ">
      <div className=" bg-blur navBar rounded-full px-4 py-1 w-[100%] h-full flex justify-evenly items-center ">
        <NavLink
          to={"/"}
          className="  relative w-[20%] h-full flex justify-center items-center "
        >
          <img
            className=" h-[70%] "
            src="/src/assets/Home.svg"
            alt="group section"
          />

          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>
        <NavLink
          to={"/friends"}
          className=" w-[20%] h-full flex justify-center items-center "
        >
          <img
            className=" h-[70%] "
            src="/src/assets/friends.svg"
            alt="group section"
          />

          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>
        <NavLink
          to={"/watch"}
          className=" w-[20%] h-full flex justify-center items-center "
        >
          <img
            className=" h-[70%] "
            src="/src/assets/Watch.svg"
            alt="group section"
          />

          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>
        <NavLink
          to={"/group"}
          className=" max-[500px]:w-0 w-[20%] h-full flex justify-center items-center "
        >
          <img
            className=" h-[70%] "
            src="/src/assets/Group.svg"
            alt="group section"
          />
          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>

        <NavLink
          to={"/notification"}
          className=" max-[500px]:w-[20%]  w-0 h-full flex justify-center items-center "
        >
          <img
            className="  object-cover "
            src="/src/assets/notifi.svg"
            alt="notification section"
          />
          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>
        <NavLink
          to={"/recent"}
          className=" w-[20%] h-full flex justify-center items-center "
        >
          <img
            className=" h-[70%] "
            src="/src/assets/Feed.svg"
            alt="recent section"
          />
          <div className="bb w-[0%] transition-all bottom-0 absolute"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default MidMenu;
