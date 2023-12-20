import React from 'react';
import cheerful from "../pics/cheerful-happy-woman-enjoying-shopping-600nw-1417347668.webp";
import accessories from"../pics/istockphoto-1132216826-612x612.jpg";
import man from "../pics/pic1.avif"
import"./index.css"

function Home() {
  return (
    <>
    <div className='d-flex flex-wrap mt-4 home-div-wrapper'>
      <div className='home-card-wrapper'>
        <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-BESTSELLERSECTION-Menswesters-upto80.jpg"/>
      </div>
      <div  className='home-card-wrapper'>
      <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-BESTSELLERSECTION-accessories-upto80.jpg"/>
      
      </div>
      <div  className='home-card-wrapper'>
      <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-BESTSELLERSECTION-womenswestern-starting249.jpg"/>

      </div>
    </div>
    <div className='d-flex flex-wrap mt-4 home-div-wrapper'>
      <div className='home-card-wrapper'>
        <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-SPONSORBRANDSTILES-veromoda-min60.jpg"/>
      </div>
      <div  className='home-card-wrapper'>
      <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-SPONSORBRANDSTILES-mothercare-min50.jpg"/>
      </div>
      <div  className='home-card-wrapper'>
      <img className='home-image-thumbnail' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-07122023-SPONSORBRANDSTILES-addias-min50.jpg"/>

      </div>
    </div>
    </>
  )
}

export default Home;