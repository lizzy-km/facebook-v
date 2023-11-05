import React from 'react'
import { closeSearch, openSearch } from './searchFun'
import { NavLink } from 'react-router-dom'

const Search = () => {

    

  return (
    <div className=' relative max-[500px]:w-full bg-[#3e3e3e9f] p-2 rounded-full w-[30%] gap-3 h-full flex justify-evenly items-center ' >
      <NavLink to={'/'} className=" cursor-pointer navBar rounded-full items-center justify-center bg-blur flex  h-full ">
      <img className='navBar-2  rounded-full' src="/src/assets/Logo.svg" alt="" />
       
      </NavLink>
      <div className=" navBar rounded-full items-center justify-center bg-blur flex w-full h-full ">
      
      <div  className='  w-full bg-[#35353571] rounded-full px-4 flex h-[40px] justify-between items-center ' >
          <img src="/src/assets/Search.svg" alt="" />
          <input onClick={openSearch} id='search' spellCheck='true' className=' w-full text-[13px] border-none stroke-none text-[#ffffff94] h-full px-2 bg-transparent rounded-full ' placeholder='Search on facebook' type="text" />
            <img onClick={closeSearch} id='searchClose' className=' transition-all opacity-0 cursor-pointer ' src="/src/assets/Close.svg" alt="" />
        </div>
        <div id='searchData' className=' z-[99999] navBar-2 transition-all rounded-[18px] p-0 flex top-[130%] absolute w-full max-h-[200px] overflow-y-auto min-h-[0px] backdrop-blur-lg bg-[#2121215d] ' >
            <div id='sData' className=' opacity-0  navBar transition-all rounded-[15px] flex flex-col w-full min-h-full bg-blur '>
                
            </div>
        </div>
      </div>

      <div className=' d-n max-[500px]:flex rounded-full w-[40px] p-1 bg-[#3e3e3e9f] navBar ' >
        <div className=' navBar rounded-full w-full h-full bg-blur ' >
          <img src="/src/assets/Menu.svg" alt="" />
        </div>
      </div>

     

      
        </div>
  )
}

export default Search
