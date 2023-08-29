import React from 'react'
import HomeNavbar from '../components/nav_homepage'
import HomeCarousel from '../components/carousel_homepage'
import Container from 'react-bootstrap/esm/Container'

const HomePage = () => {
  return (
    <div>
        <HomeNavbar/>
        
          <HomeCarousel />
        
       
        
        
    </div>
  )
}

export default HomePage