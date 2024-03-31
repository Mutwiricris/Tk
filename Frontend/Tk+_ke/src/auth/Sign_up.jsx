import React from 'react'
import logo1 from '../Images/logo1.png'
import { Link } from 'react-router-dom';
import '../App.css'
function Sign_up() {
  return (
    <div className=''>
         <div className='ease-in-2s '>
      <div className='flex  flex-col justify-center items-center h-screen'>
        <div className='flex items-center justify-center flex-col bg-white bg-opacity-64 backdrop-blur-25 backdrop-saturate-153 rounded-lg border border-opacity-30 border-gray-300 p-4 shadow-2xl border-red-500 w-64 h-64 sm:w-44 telip flex-shrink-0'>
        <div className=''>
          <img src={logo1} className='w-32' alt='logo'/>
        </div>
          <div className='pi   pb-24'>
            <h1 className='font-semibold text-center mb-5'>Welcome </h1>
            <form class="w-full">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@gmail.com" required/>
  </div>
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
    <input type="text" id="text" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
  </div>
{/* phone numbers and Adress */}
  <div className='flex items-center'>
  <div class="mb-5">
    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone Number</label>
    <input type="phone" id="phone" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07XXXXXXXX" required/>
  </div>
  <div class="mb-5">
    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
    <input type="Address" id="address" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required/>
  </div>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required/>
  </div>

  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required/>
  </div>
  <div className="flex mt-3 mb-3">
    <div className="flex items-center  justify-start  w-full h-5">
      <input type='checkbox' className='mr-2 text-lg ' required />
    <span className='font-mono text-sm'> I agree with   <a href='#' className='  font-semibold text-purple-800  text-sm' >terms and conditions</a> </span>
    </div>
  </div> 
  <div className='flex items-center w-full justify-center'>
  <button type='submit' className='mt-3  bg-purple-800 text-white w-44 h-11  font-medium text-md'>
              SignUp
  </button>
  </div>
            </form>
            <div className='mt-7 flex justify-center'>
              <h1 className='text-sm'>
               Already Registered? <Link to='/Login' className=' text-purple-800 font-semibold '>Login</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sign_up