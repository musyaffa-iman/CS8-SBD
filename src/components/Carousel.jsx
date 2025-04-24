// src/Carousel.js
import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-xl font-bold mb-4">Most wished for in Video Games</h2>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="min-w-[200px] mx-2">
            <img src={item.image} alt={item.title} className="rounded-md"/>
            <h3 className="text-center mt-2">{item.title}</h3>
            <p className="text-center">{item.subtitle}</p>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">❮</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">❯</button>
    </div>
  );
};

export default Carousel;