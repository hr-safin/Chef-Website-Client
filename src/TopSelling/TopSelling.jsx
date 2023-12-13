import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TopSellingFood from './TopSellingFood';

const TopSelling = () => {

    const [selling, setSelling] = useState([])

    // const allFood = useLoaderData()
    // console.log(allFood)

    // const mapped = allFood.map(item => item)
    // console.log(mapped)

    useEffect(() => {
        fetch("https://server-side-three-zeta.vercel.app/topSellingFoods")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSelling(data)
        })
    }, [])

    console.log(selling)
    return (
        <>
        <div className=" bg-[#121212] flex-col flex gap-4 py-4 justify-center items-center">
        <div className=" flex gap-4 lg:flex-col flex-col items-center ">
          <div className=" rounded-md w-10 h-1 bg-yellow-700"></div>
          <div>
            <h2 className=" text-white text-sm tracking-widest pb-3">Top Food</h2>
          </div>
        </div>
        <div>
            <h2 className=" text-gray-200 pb-16 text-center text-3xl tracking-wider font-bold "> Top Selling Food</h2>
        </div>
      </div>
        <div className=' lg:px-28 px-6 bg-[#121212] pb-20 pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
            {selling.slice(0,6).map(data=> <TopSellingFood data={data} key={data._id} />)}
        </div>

        <div className=' bg-[#121212] pt-8 pb-36 flex justify-center items-center'>
            <Link to="/food"><button className=' text-gray-900 bg-yellow-700 px-5 py-3 rounded-lg tracking-wider'>See All Food</button></Link>
        </div>
        </>
    );
};

export default TopSelling;