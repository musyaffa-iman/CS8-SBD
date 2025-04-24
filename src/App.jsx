import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/HomeBG";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ImageSlider from './components/ImageSlider';
import categoryData from "./data/categoryData";

const Images = [
  'https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjMzYjJlMTQyZjJjZWQwNmU3MmU1ZmFiLXN1cGVyLW1hcmlvLW9keXNzZXktbmludGVuZG8tc3dpdGNoLmpwZw.jpg',
  'https://media.gamestop.com/i/gamestop/10141904/The-Legend-of-Zelda-Breath-of-the-Wild---Nintendo-Switch?$pdp$',
  'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/6/21/ffb66012-da21-4ae2-9704-03a2eaf75a02.jpg',
  'https://images.tokopedia.net/img/cache/250-square/product-1/2020/2/13/6837668/6837668_9766cb65-b3c9-4854-a576-b26c1dcaec46_700_700',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-15066834/nintendo_nintendo_switch_pokemon-_let-s_go-_pikachu_-eur_-_english-_full02_mquwfz2z.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/81F+NPBOW0L._AC_UL600_SR600,600_.jpg',
];

function App() {
  return (
    <>
      <Navbar />
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
            <ImageSlider images={Images} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;