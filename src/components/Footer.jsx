import React from 'react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-gray-300 text-xs">
            <div 
                onClick={scrollToTop}
                className="bg-gray-700 hover:bg-gray-600 text-center text-white py-4 font-semibold cursor-pointer transition text-xs"
            >
                Back to top
            </div>
            <div className="container mx-auto px-4 pt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-xs">
                
                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">Get to Know Us</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">About Us</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Careers</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Press Releases</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">Make Money with Us</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">Sell products</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Affiliate Program</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Advertise Your Products</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">Amazon Payment Products</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">Amazon Business Card</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Shop with Points</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Reload Your Balance</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Amazon Currency Converter</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">Let Us Help You</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">Amazon and COVID-19</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Your Account</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Your Orders</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Shipping Rates & Policies</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Returns & Replacements</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Manage Your Content and Devices</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Help</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">More to Explore</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">Today's Deals</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Gift Cards</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Registry</a></li>
                </ul>
                </div>

                <div>
                <h4 className="font-semibold mb-1 text-white text-xs">Stay Connected</h4>
                <ul className="space-y-1">
                    <li><a href="#" className="hover:underline text-2xs">Facebook</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Twitter</a></li>
                    <li><a href="#" className="hover:underline text-2xs">Instagram</a></li>
                </ul>
                </div>
            </div>
            <div className="bg-gray-900 border-t border-gray-700 mt-6 py-3 text-center text-2xs text-gray-400">
                <p>© 2025 Musyaffa Iman Supriadi | Teknik Komputer 2023. All rights reserved.</p>
                <p>Indonesia</p>
            </div>
        </footer>
    );
}

export default Footer;