import React from 'react';
import logo1 from '../Images/logo1.png';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='card'>
      {/* <div className='flex text-red-600 right-4 z-50 fixed'>
      <div id="toast-warning" class="flex items-center w-max mt-2  max-w-xs p-4 text-gray-500 bg-red-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center ml-2 mr-2 flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg class="w-5 text-red-600 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span class="sr-only ">Warning icon</span>
    </div>
    <div class="ms-3 text-sm text-red-600 font-normal">invalid credentios</div>
    <button type="button" class="ms-auto -mx-1.5 ml-2 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
        <svg class="w-3 text-red-600 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
</div> */}

      <div className='flex flex-col justify-center items-center h-screen'>
        <div className='flex items-center justify-center flex-col  shadow-2xl border-red-500 w-64 h-64 sm:w-44 telip flex-shrink-0'>
        <div className=''>
          <img src={logo1} className='w-32' alt='logo'/>
        </div>
          <div className='pi   pb-24'>
            <h1 className='font-semibold text-center mb-5'>Welcome Back!</h1>
            <form class="w-full">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@gmail.com" required/>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='password' required/>
  </div>
  <div className="flex mt-3 mb-3">
    <div className="flex items-end justify-end w-full h-5">
      <a href='#' className=' font-mono font-semibold text-sm' > Forgot Password?</a>
    </div>
  </div> 
  <div className='flex items-center w-full justify-center'>
  <button type='submit' className='mt-3  bg-purple-500 text-white w-44 h-11  font-medium text-md'>
              Login
  </button>

  </div>
            </form>
            <div className='mt-7 flex justify-center'>
              <h1 className='text-sm'>
                Dont you have an account?  <Link to='/Signup' className=' text-purple-500 font-semibold '> Signup</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="toast-bottom-right" class="fixed flex items-center justify-center w-max max-w-xs p-4 space-x-4 text-green-600  bg-green-200 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
    <div class="text-sm font-normal">Logged in succesfully!</div>
</div>
    </div>
  );
}

export default Login;
