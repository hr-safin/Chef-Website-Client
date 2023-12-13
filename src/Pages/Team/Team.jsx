import React from 'react';

const Team = () => {
    return (
        <div className=''>
        <div className=" bg-[#121212] flex-col flex gap-4 py-4 justify-center items-center">
        <div className=" flex gap-4 lg:flex-col flex-col items-center ">
          <div className=" rounded-md w-10 h-1 bg-yellow-700"></div>
          <div>
            <h2 className=" text-white text-lg tracking-widest pb-3">Our Team</h2>
          </div>
        </div>
        <div>
            <h2 className=" text-gray-200 pb-16 text-center text-5xl tracking-wider font-bold ">Meet Our Team</h2>
        </div>
      </div>
        <div className=' bg-[#121212] gap-24 lg:px-28 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-24'>
            <div className='text-center shadow-xl bg-[#171717] cursor-pointer hover:scale-105 duration-500 border-b-2 border-b-[#171717] hover:border-b-2 hover:border-b-yellow-800 ease-in-out '>
               <img className=' w-full rounded-tr-lg rounded-tl-lg' src="https://cafeu.vercel.app/img/team/1.png" alt="" />
               <div className=' p-7 '>
               <h2 className='text-gray-200 text-2xl pb-2'>Mia Menderson</h2>
               <p className='text-gray-500'>Chief Executive</p>
               </div>
               
            </div>
            <div className='text-center shadow-xl bg-[#171717] cursor-pointer hover:scale-105 duration-500 ease-in-out border-b-2 border-b-[#171717] hover:border-b-2 hover:border-b-yellow-800 '>
               <img className=' w-full rounded-tr-lg rounded-tl-lg' src="https://cafeu.vercel.app/img/team/2.png" alt="" />
               <div className=' p-7 '>
               <h2 className='text-gray-200 text-2xl pb-2'>Mike Adson</h2>
               <p className='text-gray-500'>Executive</p>
               </div>
               
            </div>
            <div className='text-center shadow-xl bg-[#171717] cursor-pointer hover:scale-105 duration-500 ease-in-out border-b-2 border-b-[#171717] hover:border-b-2 hover:border-b-yellow-800 '>
               <img className=' w-full rounded-tr-lg rounded-tl-lg' src="https://cafeu.vercel.app/img/team/3.png" alt="" />
               <div className=' p-7 '>
               <h2 className='text-gray-200 text-2xl pb-2'>Jemy Anderson</h2>
               <p className='text-gray-500'>Food Inspector</p>
               </div>
               
            </div>
        </div>
        </div>
    );
};

export default Team;