import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header2 from '../Header/Header2';
import { Helmet } from 'react-helmet';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
const SeeFood = () => {
    window.scrollTo(0,0)
    const {id} = useParams()
    console.log(id)

    const [display,setDisplay] = useState([])

    useEffect(() => {
        fetch("https://server-side-three-zeta.vercel.app/foods")
         .then(res => res.json())
         .then(data => {
            const matchedFood = data.find(item => item._id === id)
            setDisplay(matchedFood)
         })
    }, [])

    const name = display.foodName

    console.log(display)
    return (
        <>
        <Header2 />
        <Helmet>
            <title>Chef | See-Food </title>
        </Helmet>
        <div className=' bg-[#121212] lg:px-28 px-6 lg:py-0 py-44  lg:pt-20 flex md:h-screen justify-center items-center'>
        <Card className="w-full max-w-[48rem]  flex flex-col lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full md:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          
          src={display.foodImage}
          alt="card-image"
          className="lg:h-full  lg:w-full lg:object-cover"
        />
      </CardHeader>
      <CardBody className=' lg:px-10'>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {display.foodCategory}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {display.foodName}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
         Country : {display.foodOrigin}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
          Price : $ {display.foodPrice}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
          Made By : {display.chefName}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {display.foodDescription}
        </Typography>
        <Link to={`/foodOrder/${display._id}`}   className="inline-block">
          <Button variant="text" className="flex hover:bg-yellow-700 items-center gap-1">
            Order Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
        </div>
       
        </>
    );
};

export default SeeFood;