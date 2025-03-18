import React, { useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [flag,setFlag]=useState(0);
  return (
    <div className='text-white mt-0  w-full  p-4 sticky top-0 z-[1]  bg-bgPrime'>
      <ul className='hidden  sm:flex sm:text-lg gap-4 items-center justify-center  cursor-pointer'>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href="#home">Home</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#about'> About Us </a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a className='text-sm sm:text-lg md:text-xl'  href='#seva'> Seva </a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#gallary'> Gallery</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#trust'> Trust</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#contact'> Contact us</a></li>
        <li className='bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#donate'> Donate</a></li>
        <li><img  src={assets.Ricon} alt="" /></li>
      </ul>
      <div className='block sm:hidden absolute right-[-40px]'>
        <div >
            <img onClick={()=>setFlag(flag===0?1:0)} className='w-1/4' src={assets.menuIcon} alt="" />
            <ul>
            <ul className={ `${flag===0? 'hidden' : 'flex'} sm:hidden flex-col absolute right-12 w-24`}>
            <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href="#home">Home</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#about'> About Us </a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a className='text-sm sm:text-lg md:text-xl'  href='#seva'> Seva </a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#gallary'> Gallery</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#trust'> Trust</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#contact'> Contact us</a></li>
        <li className='hover:bg-primary px-3 py-1 rounded-md '><a  className='text-sm sm:text-lg md:text-xl' href='#donate'> Donate</a></li>
      </ul>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
