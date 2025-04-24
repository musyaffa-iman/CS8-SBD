import { useState, useEffect, useRef } from "react";
import Image1 from "../assets/slide1.jpg";
import Image2 from "../assets/slide2.jpg";
import Image3 from "../assets/slide3.jpg";

const images = [Image1, Image2, Image3];
const AUTO_SCROLL_INTERVAL = 8000;
const TRANSITION_DURATION = 1000;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTO_SCROLL_INTERVAL);
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoScroll();
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const prevSlide = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoScroll();
  };

  const nextSlide = () => {
    setTransitionEnabled(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetAutoScroll();
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden group">
      <div
        className="flex transition-transform ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transitionDuration: `${transitionEnabled ? TRANSITION_DURATION : 0}ms`
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={src}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-200 to-transparent" />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 z-10 transition-opacity duration-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/80 text-white p-3 rounded-full hover:bg-gray-700 z-10 transition-opacity duration-300"
      >
        ❯
      </button>
    </div>
  );
}