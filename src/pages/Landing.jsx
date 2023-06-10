import React from "react";
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import CFElogo from "../img/cfelogo.png";
import CFEubi from "../img/cfeubi.jpg"
//import Headers from "../components/Headers";
const LandingPage = () => {
    const carouselImages = [CFElogo,CFEubi,CFElogo];
  
    return (
      <>
        <Header />
        <Navbar />
        <Carousel images={carouselImages} />
      </>
    );
  };
  
    export default LandingPage