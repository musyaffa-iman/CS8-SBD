import React, { useState, useEffect, useRef } from 'react';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
    function handleClickOutside(event) {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
        }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
    <>
        {isOpen && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
        />
        )}

        <div className="relative" ref={sidebarRef}>
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-2 py-1 hover:border hover:border-white rounded z-50"
        >
            <span className="mr-1">All</span>
            <svg 
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div 
            className={`fixed left-0 top-0 h-full w-80 bg-white text-black shadow-lg z-[1000] overflow-y-auto transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="bg-gray-800 p-4 border-b">
                <h3 className="font-bold text-white text-lg text-left">Hello, sign in</h3>
            </div>
            
            <div className="p-4 text-left">

            <h4 className="font-semibold text-base mb-2">Digital Content & Devices</h4>
            <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Prime Video</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Amazon Music</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Kindle E-readers & Books</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Amazon Appstore</a></li>
            </ul>

            <h4 className="font-semibold text-base mt-4 mb-2">Shop by Department</h4>
            <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Electronics</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Computers</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Smart Home</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Arts & Crafts</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">See all</a></li>
            </ul>

            <h4 className="font-semibold text-base mt-4 mb-2">Programs & Features</h4>
            <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Gift Cards</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Shop By Interest</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Amazon Live</a></li>
            </ul>

            <h4 className="font-semibold text-base mt-4 mb-2">Help & Settings</h4>
            <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Your Account</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Customer Service</a></li>
                <li><a href="#" className="hover:text-orange-500 block py-1 pl-2">Sign In</a></li>
            </ul>
            </div>
        </div>
        </div>
    </>
    );
}

export default Sidebar;