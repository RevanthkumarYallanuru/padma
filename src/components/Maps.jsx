import React from 'react'
import { assets } from '../assets/assets'
const Maps = () => {
  return (
    <div>
       <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='text-white'>Show Case</h1>
                <h1 className='text-xl sm:text-3xl md:text-4xl text-primary'>Research Locations Explored</h1>
                <img className='w-1/8 animate-pulse' src={assets.white} alt="" />
            </div>
    </div>
  )
}

export default Maps
