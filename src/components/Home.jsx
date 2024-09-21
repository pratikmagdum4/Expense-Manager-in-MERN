import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 flex flex-col justify-center items-center">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Expense Tracker</h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    Manage your expenses efficiently and track your financial goals with ease.
                </p>

                {/* Call to Action Buttons */}
                <div className="space-x-4">
                    <Link to="/login">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-gray-200 transition">
                            Log In
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-blue-700 transition">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
                    {/* Feature 1 */}
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Track Expenses</h3>
                        <p>Monitor all your spending habits and get detailed insights on where your money goes.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Visualize with Charts</h3>
                        <p>Visualize your expenses with intuitive pie charts and graphs for better decision making.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Manage Easily</h3>
                        <p>Easily add, edit, and delete expenses from your account in a user-friendly interface.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
