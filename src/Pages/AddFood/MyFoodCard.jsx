import React from 'react';

import { Helmet } from 'react-helmet';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const MyFoodCard = ({display}) => {

    console.log(display)
    return (
        <>
        
        <Helmet>
            <title>Chef | Added-Food </title>
        </Helmet>
        <div className='    lg:pt-20  pt-16 flex  justify-center items-center'>
        <Card className=" lg:w-[800px] mx-auto  flex flex-col lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full lg:w-[350px]  shrink-0 rounded-r-none"
      >
        <img
          
          src={display.foodImage}
          alt="card-image"
          className="lg:h-full  lg:w-full lg:object-cover"
        />
      </CardHeader>
      <CardBody className=' lg:px-10'>
        <div className=' flex justify-between items-center'>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {display.foodName}
        </Typography>
        <Typography variant="h6" color="gray" className=" uppercase">
          {display.foodCategory}
        </Typography>
        </div>
        
        
        <Typography variant="h6" color="gray" className="mb-2">
         Country : {display.foodOrigin}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
          Price : $ {display.foodPrice}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
          Added By : {display.buyerName}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {display.foodDescription}
        </Typography>
        <Link to={`/update/${display._id}`}   className="inline-block">
          <Button variant="text" className="flex hover:bg-yellow-700 items-center gap-1">
            Update Food
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

export default MyFoodCard;