import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Home from "./pages/HomeBG";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ImageSlider from './components/ImageSlider';
import categoryData from "./data/categoryData";

const dummyImages = [
  'https://picsum.photos/id/1018/400/300',
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1019/400/300',
  'https://picsum.photos/id/1020/400/300',
  'https://picsum.photos/id/1021/400/300',
  'https://picsum.photos/id/1022/400/300',
];

function App() {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <div className="relative bg-gray-200">
        <div className="relative z-10">
          <Home />
        </div>
        
        <div className="relative z-10 -mt-56 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-6">
              {categoryData.map((category, idx) => (
                <Card
                  key={idx}
                  title={category.title}
                  items={category.items}
                  linkText={category.linkText}
                  linkUrl={category.linkUrl}
                />
              ))}
            </div>  
            <ImageSlider images={dummyImages} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;