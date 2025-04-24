import React from 'react';
import Sidebar from './Sidebar';

function SecondaryNavbar() {
    return (
    <div className="bg-gray-800 text-white relative z-50">
        <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4 overflow-x-auto py-1.5 text-xs whitespace-nowrap">
            <div className="flex items-center space-x-4">
            <Sidebar />
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Today's Deals</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Registry</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Prime Video</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Gift Cards</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Customer Service</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5">Sell</a>
            </div>
            
            <div className="ml-auto flex items-center space-x-4">
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5 hidden md:block">Amazon Basics</a>
            <a href="#" className="hover:underline hover:text-gray-300 px-1 py-0.5 hidden md:block">New Releases</a>
            </div>
        </div>
        </div>
    </div>
    );
}

export default SecondaryNavbar;