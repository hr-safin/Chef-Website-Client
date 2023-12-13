import React from 'react';
import Header2 from '../Header/Header2';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <>
        <Header2/>
        <Helmet>
            <title>Chef | Blog</title>
        </Helmet>
        <div className=' bg-[#121212] lg:px-28 px-4 py-44 flex flex-col gap-10 justify-center items-center'>
            <div className=' bg-gray-900 p-10 lg:w-[900px] rounded-md'>
                <h2 className=' text-gray-200 font-bold text-2xl lg:text-3xl text-center pb-4'>What is one way data binding</h2>
                <p className=' text-gray-600 lg:text-base text-sm text-center'>One-way data binding is a data flow approach in web development where changes in a data source reflect in the user interface (UI), but UI interactions don't affect the data source. It ensures that the UI always represents the current state of the data, providing consistency and responsiveness. This concept simplifies managing and displaying data, often seen in frameworks like React and Angular</p>
            </div>
            <div className=' bg-gray-900 p-10 lg:w-[900px] rounded-md'>
                <h2 className=' text-gray-200 font-bold text-2xl lg:text-3xl text-center pb-4'>What is npm in node.js</h2>
                <p className=' text-gray-600 lg:text-base text-sm text-center'>npm, or Node Package Manager, is like an app store for Node.js. It helps Node.js developers easily find, install, and use code libraries and tools made by others. You can also create and share your own code packages. npm makes it simple to manage the building blocks of your Node.js projects, saving time and effort in development</p>
            </div>
            <div className=' bg-gray-900 p-10 lg:w-[900px] rounded-md'>
                <h2 className=' text-gray-200 font-bold text-2xl lg:text-3xl text-center pb-4'>Different between Mongodb database and MySql database</h2>
                <p className=' text-gray-600 lg:text-base text-sm text-center'>MongoDB and MySQL are two fundamentally different types of databases. MongoDB is a NoSQL database, often likened to a drawer where you can put a wide variety of items without adhering to a strict structure. It's highly flexible and suitable for managing unstructured or semi-structured data, making it a good choice for projects with evolving data needs. In contrast, MySQL is a relational database, akin to a well-organized table with rows and columns where data is neatly structured and interconnected. It's ideal for managing structured data, similar to the organization of data in a spreadsheet. Choosing between the two depends on the specific needs and structure of your data.</p>
            </div>
        </div>
        </>
    );
};

export default Blog;