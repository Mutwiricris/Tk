import React from 'react'
import Navigation_bar from '../Components/Navigation_bar'
import Home_content from '../Components/Home_content'

function Home() {
  return (
    <div className='body'>
       <Navigation_bar/>
       <Home_content/>
    </div>
  )
}

export default Home