import React from 'react'
import { Link } from 'react-router-dom'

function Welcome_msg() {
  return (
    <div>
          <div className=' flex flex-col justify-center items-center  h-screen'>
       <div className='pi'>
        <image className='w-40 h-40' src='../Images/Welcome.jpg'/>
    </div>
    {/* <div className='flex flex-col justify-center items-center'> */}
      <h3 className='text-4xl font-sans font-medium'>
        Welcome to tk+ <sup className='font-normal '>ke</sup>
      </h3>
      <p className='text-xsm mt-5'>Smart Tickets Easy Book Easy Plan</p>
      <Link to='/Login'>

      <button  className=' mt-5 bg-red-600 w-40 h-11 rounded-full font-medium text-md'>
          proceed
      </button>
      </Link>
    {/* </div> */}
    </div>
    </div>
  )
}

export default Welcome_msg