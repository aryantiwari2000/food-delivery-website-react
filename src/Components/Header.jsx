import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Header = ({count}) => {

  const[sideNav,setSideNav]=useState(false)
  return (
    <div className='fixed z-50 top-0 w-full bg-white left-0'>
    <div className=' flex justify-between py-[25px]	px-[18px] text-[20px] font-semibold drop-shadow border-b relative ' >
    <div>
      <Link to='/'>
     <p>yumi<span className='text-[#fbc531]'>food</span></p>
     </Link>
    </div>
     <div >
      <ul className='sm:flex gap-12 hidden cursor-pointer'>
              <Link to='/'>
               <li className=' hover:text-[#fbc531]'>Home</li>
               </Link >
               <Link to='/aboutus'>
               <li className=' hover:text-[#fbc531]'>About us</li>
               </Link>
               <Link to='/ourfood'>
               <li className=' hover:text-[#fbc531]'>OurFood</li>
               </Link>
               <Link to='/signin'>
               <li className=' hover:text-[#fbc531]'>Sign In</li> 
               </Link>
      </ul>
     </div>

     {sideNav?(
            <div className=' absolute bg-red-100 top-0 right-0 h-[100vh] w-[300px] flex items-center justify-center z-10 '>
              <RxCross1 size={25} className=' absolute top-3 right-3 cursor-pointer '
                onClick={()=>setSideNav(!sideNav)}  />
              <ul className='flex gap-12  cursor-pointer flex-col'>
              <Link to='/'>
               <li className=' hover:text-[#fbc531]'  onClick={()=>setSideNav(!sideNav)}>Home</li>
               </Link >
               <Link to='/aboutus'>
               <li className=' hover:text-[#fbc531]'  onClick={()=>setSideNav(!sideNav)}>About us</li>
               </Link>
               <Link to='/ourfood'>
               <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>OurFood</li>
               </Link>
               <Link to='/signin'>
               <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>Sign In</li> 
               </Link>
               
              </ul>
             </div>):(""
             )}

    <div className='flex gap-5'>
    <p><GiHamburgerMenu size={30} className=' cursor-pointer sm:hidden'
      onClick={()=>setSideNav(!sideNav)}   /></p>
     <p>
      {count}
      <FaShoppingCart size={30}  /></p>

    </div>
     </div>
     </div>
  )
}

export default Header

