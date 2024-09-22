import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/tracker');
        } catch (err) {
            if (err.response && err.response.status === 400) {
                console.error('Incorrect Email or password');
                toast.error("Incorrect Email or password")
                alert("Incorrect Email or password")
                // You can also display an error message to the user here
            } else {
                
                console.error(err);
            }
        }
    };


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
