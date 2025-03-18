import React from 'react'
import { assets } from '../assets/assets'
import Waves from '../components/Waves'
import gold from '../assets/goldline.png'
const Home = () => {
 
  return (
    <>
    <Waves className='z-[-1]'/>
    <div id='home' className='w-full flex flex-col-reverse md:flex-row items-center  justify-evenly p-6 mb-6'>
     
      <div className='flex flex-col gap-2'>
      <h1 className='text-2xl md:text-5xl text-primary'>Sri Lakshmi Padmavathi</h1>
      <span className='text-center  text-white'>Something here</span>
      </div>

      <img className='w-1/4  border-primary border-4 rounded-3xl' src={assets.bannerPic} alt="" />
    </div>
    <img className='m-auto' src={gold} alt="" />
    </>
  )
}

export default Home
