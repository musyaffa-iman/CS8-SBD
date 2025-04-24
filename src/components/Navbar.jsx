import Amazon from "../assets/amazon.png";
import Search from "../assets/search.png";

export default function Navbar() {
    return (
        <div className="bg-[#131921] text-white px-4 py-2 flex items-center justify-between">
            {/* Amazon Logo - Clickable */}
            <a href="#" className="mr-4">
                <img src={Amazon} alt="Amazon Logo" className="w-20 h-6" />
            </a>

            {/* Delivery Location - Clickable */}
            <a 
                href="#"
                className="hidden md:flex items-center text-sm mr-4 cursor-pointer hover:border hover:border-white p-1 rounded"
            >
                <div>
                    <p className="text-gray-300">Deliver to</p>
                    <p className="font-semibold">Indonesia</p>
                </div>
            </a>

            {/* Search Bar */}
            <div className="flex flex-grow mx-4 max-w-3xl">
                <select className="bg-gray-200 text-sm px-2 rounded-l-md text-black">
                    <option>All</option>
                    <option>Books</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                </select>
                <input
                    type="text"
                    placeholder="Search Amazon"
                    className="flex-grow px-4 py-1 text-black"
                />
                <a 
                    href="#"
                    className="bg-yellow-400 px-4 rounded-r-md hover:bg-yellow-500 flex items-center"
                >
                    <img src={Search} alt="Search" className="w-5 h-5" />
                </a>
            </div>

            {/* Language Selector - Clickable */}
            <a 
                href="#"
                className="hidden md:flex items-center text-sm mx-2 cursor-pointer hover:border hover:border-white p-1 rounded"
            >
                <span>EN</span>
            </a>

            {/* Account & Lists - Clickable */}
            <a 
                href="#"
                className="hidden md:flex flex-col mx-2 text-sm cursor-pointer hover:border hover:border-white p-1 rounded"
            >
                <span className="text-gray-300">Hello, sign in</span>
                <span className="font-semibold flex items-center">
                    Account & Lists
                </span>
            </a>

            {/* Returns & Orders - Clickable */}
            <a 
                href="#"
                className="hidden md:flex flex-col mx-2 text-sm cursor-pointer hover:border hover:border-white p-1 rounded"
            >
                <span className="text-gray-300">Returns</span>
                <span className="font-semibold">& Orders</span>
            </a>

            {/* Cart - Clickable */}
            <a 
                href="#"
                className="flex items-center text-sm ml-4 cursor-pointer hover:border hover:border-white p-1 rounded"
            >
                <span className="font-semibold">Cart</span>
                <span className="ml-1 text-orange-400 font-bold">0</span>
            </a>
        </div>
    );
}