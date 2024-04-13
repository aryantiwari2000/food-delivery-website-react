import React, { useEffect, useState } from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";





const Hero = () => {
    const imgData=[
        {
          url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg"
        },
         {
          url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg"
        },
         {
          url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg"
        },
    
        ]
 const[slider,setSlider]=useState(0)

 const handlePlus=()=>{
setSlider(slider === imgData.length-1?0:slider+1)
 }
 const handleMinus=()=>{
setSlider(slider === 0?imgData.length-1:slider-1)

 }
 useEffect(()=>{
    const sliderClear=setInterval(()=>{
        handlePlus()
    },2000)
    return()=>clearInterval(sliderClear)
 },[slider])

  return (
    <div className='m-[100px]'>
    <div className='w-[90%] mx-auto h-[80vh] my-5 relative margin-[100px]'>
      <div>
        {
        imgData.map((item,i)=>(
        <div key={i} className={`${slider=== i?"block":"hidden"}`}>
        <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover '/>
        </div>
         ))
         }
         <div className='w-full mx-auto h-[80vh] bg-black absolute top-0 left-0 rounded-2xl opacity-50'></div>
         <div className='absolute text-center w-full top-[50%] flex justify-center text-white font-semibold md:text-[30px] text-[20px] '>
          <p>Welcome to the world of Tasty & Fresh Food</p>
         </div>

      </div>
      <div className='flex absolute top-[50%] justify-between text-white px-5 w-full'>
      <FaChevronLeft size={30} className='cursor-pointer' onClick={handleMinus} />
      <FaChevronRight size={30} className='cursor-pointer'  onClick={handlePlus}  />
      </div>

    </div>
    </div>
  )
}

export default Hero
