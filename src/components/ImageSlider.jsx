import React, { useRef } from 'react';

const ImageSlider = ({ images }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-white shadow-lg p-6 w-full group">
            <h2 className="text-xl font-bold mb-2 text-left">Most wished for in Video Games</h2>
            
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => scroll('left')}
            >
                ‹
            </button>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 scroll-smooth px-6 py-2 scrollbar-hidden group-hover:scrollbar-visible"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative min-w-[200px] flex-shrink-0 scroll-snap-align-start bg-gray-100 shadow-md overflow-hidden"
                    >
                        <img src={img} alt={`img-${idx}`} className="w-full h-40 object-cover" />
                    </div>
                ))}
            </div>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => scroll('right')}
            >
                ›
            </button>
        </div>
    );
};

export default ImageSlider;