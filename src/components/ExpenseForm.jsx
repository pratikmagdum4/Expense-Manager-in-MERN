import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ setExpenses, token }) => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { category, amount, comments };
        axios.post('http://localhost:5000/api/expenses', expense, {
            headers: { 'Authorization': token }
        }).then(res => {
            setExpenses((prev) => [res.data, ...prev]);
        }).catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
                Add Expense
            </button>
        </form>
    );
};

export default ExpenseForm;
