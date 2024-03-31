import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Getting_Started from '../Pages/Getting_Started'
import Welcome_msg from '../Pages/Welcome_msg'
import Login from '../auth/Login'
import Sign_up from '../auth/Sign_up'
import Home from '../Pages/Home'
import Discover from '../Pages/Discover'

function Route_paths() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='Welcome' element={<Welcome_msg/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Sign_up/>}/>
            <Route path='/GettingStarted' element={<Getting_Started/>}/>
            <Route path='/Discover' element={<Discover/>}/>
        </Routes>
    </div>
  )
}

export default Route_paths