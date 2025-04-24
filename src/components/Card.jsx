import React from 'react';

function Card({ title, items, linkText, linkUrl }) {
    const isSingle = items.length === 1;

    return (
        <div className="bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        <div className={isSingle ? "mb-4" : "grid grid-cols-2 gap-2 mb-4"}>
            {items.map((item, idx) => (
            <a key={idx} href={item.link} className="block text-center">
                <img
                src={item.image}
                alt={item.label}
                className={`w-full h-auto rounded ${isSingle ? "mx-auto" : ""}`}
                />
                {!isSingle && (
                <p className="mt-1 text-xs">{item.label}</p>
                )}
            </a>
            ))}
        </div>

        <a href={linkUrl} className="block text-blue-500 hover:underline text-sm text-center">
            {linkText}
        </a>
        </div>
    );
}


export default Card;
