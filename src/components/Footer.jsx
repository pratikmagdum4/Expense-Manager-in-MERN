import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white text-center p-4 mt-10">
            <div className="container mx-auto">
                <p>© 2024 Expense Tracker. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
