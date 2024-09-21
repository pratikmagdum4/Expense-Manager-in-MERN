import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', { name, email, message });
            setStatus('Message sent successfully!');
        } catch (error) {
            setStatus('Failed to send the message.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                {status && <p className="text-center text-green-500 mb-4">{status}</p>}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            className="w-full p-2 border rounded-lg"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
