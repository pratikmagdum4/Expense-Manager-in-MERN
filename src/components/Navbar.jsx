import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/">Expense Tracker</Link>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/login">
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-md">Signup</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
