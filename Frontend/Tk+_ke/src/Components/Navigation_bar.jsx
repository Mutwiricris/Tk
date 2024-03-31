import React from 'react';
import logo from '../Images/logo1.png';

function NavigationBar() {
  return (
    <>
      <nav className=" border-gray-200 border-b h-max dark:bg-gray-900">
        <div className="flex justify-between flex-wrap w-full  items-center mx-auto max-w-screen-xl p-4">
          <h1 className='font-bold text-2xl text-white'>T+<sup>ke</sup></h1>
          <div>
            <ul className='flex items-center '>
              <li><a href='#' className='ml-7 text-gray-200 font-semibold text-lg '>Home</a></li>
              <li><a href='#' className='ml-7 text-gray-200 font-semibold text-lg '>Discover</a></li>
              <li><a href='#' className='ml-7 text-gray-200 font-semibold text-lg '>Events</a></li>
              <li><a href='#'className='ml-7 text-gray-200 font-semibold text-lg '>Blogs</a></li>
              <li><a href='#'className='ml-7 text-gray-200 font-semibold text-lg 'ml-7 text-gray-200 font-semibold text-lg >Contact</a></li>
            </ul>
            
          </div>
          {/* //Login/Sign_up  --> => */}
          <div className='flex items-center'>
            <button className=' text-lg text-gray-200 mr-7'>Login </button>
            <button className='border border-gray-400 font-medium text-lg w-32 h-12 p-2 text-gray-200'>Signup<i class="fa-solid fa-right-to-bracket ml-3 text-lg"></i> </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
