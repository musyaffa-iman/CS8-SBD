import React from 'react';
import AmazonLogo from '../assets/amazon.png';
import { FaSearch, FaBars, FaShoppingCart, FaUser, FaChevronDown } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import Sidebar from './Sidebar';

function Navbar() {
    return (
        <>
            {/* Navbar Utama */}
            <div className="bg-[#131921] text-white">
                {/* Navbar Utama - Mobile */}
                <div className="md:hidden flex items-center justify-between px-4 py-3">
                    <a href="/" className="flex-shrink-0">
                        <img src={AmazonLogo} alt="Amazon Logo" className="h-6" />
                    </a>
                    <div className="flex space-x-4">
                        <a href="/account" className="p-1">
                            <FaUser className="w-4 h-4" />
                        </a>
                        <a href="/cart" className="p-1">
                            <FaShoppingCart className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bagian atas */}
                <div className="hidden md:flex flex-col md:flex-row items-center px-4 py-2 gap-2">
                    {/* Logo */}
                    <a href="/" className="md:mr-4 w-full md:w-auto">
                        <img src={AmazonLogo} alt="Amazon Logo" className="h-6 mx-auto md:mx-0" />
                    </a>

                    {/* Search Bar */}
                    <div className="flex w-full md:max-w-2xl">
                        <select className="bg-gray-100 text-xs p-2 rounded-l-md border-r border-gray-300 text-gray-600">
                            <option>All Departments</option>
                            <option>Arts & Crafts</option>
                            <option>Automotive</option>
                            <option>Baby</option>
                            <option>Beauty & Personal Care</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search Amazon"
                            className="flex-grow p-2 text-sm focus:outline-none"
                        />
                        <button className="bg-yellow-400 p-2 rounded-r-md hover:bg-yellow-500">
                            <FaSearch className="h-4 w-4 text-gray-800" />
                        </button>
                    </div>

                    {/* Account & Cart */}
                    <div className="hidden md:flex items-center space-x-4 ml-auto">
                        <a href="/account" className="text-xs hover:border hover:border-white p-1 rounded">
                            <div>Hello, Sign in</div>
                            <div className="font-bold flex items-center">
                                Account & Lists
                                <FaChevronDown className="ml-1 w-3 h-3" />
                            </div>
                        </a>
                        <a href="/orders" className="text-xs hover:border hover:border-white p-1 rounded">
                            <div>Returns</div>
                            <div className="font-bold">& Orders</div>
                        </a>
                        <a href="/cart" className="flex items-center hover:border hover:border-white p-1 rounded">
                            <div className="relative">
                                <FaShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
                            </div>
                            <span className="font-bold text-sm ml-1">Cart</span>
                        </a>
                    </div>
                </div>

                {/* Navbar bawah */}
                <div className="bg-[#232F3E] text-white text-sm font-medium">
                    <div className="container mx-auto px-4">
                        <div className="flex overflow-x-auto py-1.5 space-x-6 whitespace-nowrap text-xs scrollbar-hide">
                            <Sidebar />
                            <a href="/deals" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Today's Deals</a>
                            <a href="/registry" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Registry</a>
                            <a href="/prime" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Prime Video</a>
                            <a href="/giftcards" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Gift Cards</a>
                            <a href="/service" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Customer Service</a>
                            <a href="/sell" className="px-1 py-1 hover:underline hover:border hover:border-white rounded">Sell</a>
                            <a href="/basics" className="px-1 py-1 hover:underline hover:border hover:border-white rounded hidden md:inline-block">Amazon Basics</a>
                            <a href="/newreleases" className="px-1 py-1 hover:underline hover:border hover:border-white rounded hidden md:inline-block">New Releases</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar bawah - Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#131921] text-white flex justify-around py-2 z-50">
                <a href="/" className="flex flex-col items-center text-xs p-2 font-medium">
                    <span>Home</span>
                </a>
                <a href="/account" className="flex flex-col items-center text-xs p-2 font-medium">
                    <span>Account</span>
                </a>
                <a href="/orders" className="flex flex-col items-center text-xs p-2 font-medium">
                    <span>Orders</span>
                </a>
                <a href="/cart" className="flex flex-col items-center text-xs p-2 font-medium">
                    <FaShoppingCart className="w-4 h-4" />
                    <span>Cart</span>
                </a>
            </div>
        </>
    );
}

export default Navbar;