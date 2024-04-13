import React from 'react'

const footer = () => {
  return (
    <div className='w-full bg-black text-white '>
      <div className='grid grid-cols-2 md:grid-cols-4 pt-3'>
        <div >
           <h2 className='font-bold mb-3 text-[30px] md:text-[25px]'><p>Yumi<span className='text-[#fbc531]'>food</span></p>
         </h2>
           <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">© 2023 Bundl Technologies Pvt. Ltd</p> 
        </div>

        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]' >Company</h2>
           <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">About</p> 
           <p className="text-[20px]  md:text-[20px] mb-2 text-[grey]">Careers</p> 
           <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Team</p> 
           <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Swiggy One</p> 
           <p className="text-[20px] md:text-[20px]  mb-2 text-[grey]">Swiggy Instamart</p> 
           <p className="text-[20px] md:text-[20px] mb-2 text-[grey]">Swiggy Genie</p> 

        </div>

        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Contact us</h2>
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Help & Support</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Partner with us</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Ride with us</p> 
        </div>

        <div>
           <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to</h2>
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Bangalore</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Gurgaon</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Hyderabad</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Delhi</p> 
           <p className="text-[20px] mb-2 md:text-[20px] text-[grey]">Mumbai</p> 

        </div>
      </div>
    </div>
  )
}

export default footer
