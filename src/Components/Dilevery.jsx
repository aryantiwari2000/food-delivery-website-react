import React from 'react'

const Dilevery = () => {
  return (
    <div className='w-full py-16 px-4 mr' >
      <h3 className='font-bold text-center text-2xl text-[#fbc531]'>Quick Delivery App</h3>
      <div className='grid grid-cols-2 w-[70%] mx-auto my-10 gap-10'>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt=""
        className='w-[550px]' />
        <div className='flex flex-col justify-center'>
            <p className='font-bold text-[green] text-[30px]'>Get The App</p>
            <h2 className='text-5xl py-2 font-bold'>The Fastest Food Delivery App In India</h2>
            <button className='bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531]' >Get Shorted

            </button>
        </div>
      </div>
    </div>
  )
}

export default Dilevery
