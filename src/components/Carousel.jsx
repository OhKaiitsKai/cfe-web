import React, { useState } from "react";
import "../App.scss";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="carousel">
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="No quiere esto" />
        </div>
        <div className="controls">
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
        </div>
      </div>
    );
  };
  
  export default Carousel
