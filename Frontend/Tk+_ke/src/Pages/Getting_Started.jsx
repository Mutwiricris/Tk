import React from 'react'
import '../Styles/Getting.css';
import { Link } from 'react-router-dom';
function Getting_Started() {
  return (
    <div className=' flex flex-col justify-center items-center  h-screen'>
       <div className='pic'>
    </div>
    {/* <div className='flex flex-col justify-center items-center'> */}
      <h3 className='text-xl font-sans font-medium'>
        Getting started
      </h3>
      <button  className='gett mt-5'>
        <Link to='/welcome'>
        <i class="fa-solid fa-angle-right "></i>
        </Link>
      </button>
    {/* </div> */}
    </div>
  )
}

export default Getting_Started
