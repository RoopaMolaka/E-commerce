import React from 'react';
import cheerful from "../pics/cheerful-happy-woman-enjoying-shopping-600nw-1417347668.webp";
import family from"../pics/istockphoto-1132216826-612x612.jpg";
import man from "../pics/pic1.avif"
import"./index"

function Home() {
  return (
    <>
   <div id="carouselexample" className="carousel slide  height">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={family} className="d-block w-100" alt="broken-image"/>
    </div>
    <div className="carousel-item">
      <img src={cheerful} className="d-block w-100" alt="broken-image"/>
    </div>
    <div className="carousel-item">
      <img src={man} className="d-block w-100" alt="broken-image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselexample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselexample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home;