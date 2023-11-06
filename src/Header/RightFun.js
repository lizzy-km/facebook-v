import  { useEffect, useState } from 'react'

const RightFun = () => {
    const [right,setRight] = useState(false)
    const [menu,setMenu] = useState(false)


  useEffect(()=>{
    if (right == true) {
        setMenu(false)
      const searchData = document.getElementById('rightData')
    const sData = document.getElementById('rData')
    const Noti = document.getElementById('noti')

    Noti.classList.add('bg-[#212121]')

    

    sData.classList.add('opacity-1')
    sData.classList.remove('opacity-0')

    searchData.classList.add('min-h-[300px]')
    searchData.classList.remove('min-h-[0px]')
    searchData.classList.add('p-1')
    searchData.classList.remove('p-0')
    } else {
      const searchData = document.getElementById('rightData')
      const sData = document.getElementById('rData')
        
      const Noti = document.getElementById('noti')

    Noti.classList.remove('bg-[#212121]')
    
  
      sData.classList.add('opacity-0')
      sData.classList.remove('opacity-1')
  
      searchData.classList.add('min-h-[0px]')
      searchData.classList.remove('min-h-[300px]')
      searchData.classList.add('p-0')
      searchData.classList.remove('p-1')
    }
  },[right])

  useEffect(()=>{
    if (menu == true) {
        setRight(false)
      const searchData = document.getElementById('menuData')
    const sData = document.getElementById('mData')
    const Menu = document.getElementById('userMenu')

    Menu.classList.add('bg-[#212121]')


    

    sData.classList.add('opacity-1')
    sData.classList.remove('opacity-0')

    searchData.classList.add('min-h-[300px]')
    searchData.classList.remove('min-h-[0px]')
    searchData.classList.add('p-1')
    searchData.classList.remove('p-0')
    } else {
        const searchData = document.getElementById('menuData')
        const sData = document.getElementById('mData')
        const Menu = document.getElementById('userMenu')
    
        Menu.classList.remove('bg-[#212121]')
    
  
      sData.classList.add('opacity-0')
      sData.classList.remove('opacity-1')
  
      searchData.classList.add('min-h-[0px]')
      searchData.classList.remove('min-h-[300px]')
      searchData.classList.add('p-0')
      searchData.classList.remove('p-1')
    }
  },[menu])



  return (
   {
    right,
    setRight,
    menu,
    setMenu
}
  )
}

export default RightFun
