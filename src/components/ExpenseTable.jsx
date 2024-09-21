import React, { useState } from 'react';
import axios from 'axios';

const ExpenseTable = ({ expenses, setExpenses, token }) => {
    const [editingId, setEditingId] = useState(null);
    const [editCategory, setEditCategory] = useState('');
    const [editAmount, setEditAmount] = useState('');
    const [editComments, setEditComments] = useState('');
console.log("token here is ",token)
    // Delete Expense
    const deleteExpense = (id) => {
        axios
            .delete(`http://localhost:5000/api/expenses/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => {
                setExpenses(expenses.filter((expense) => expense._id !== id));
            })
            .catch((err) => console.error(err));
    };

    // Start editing an expense
    const startEditing = (expense) => {
        setEditingId(expense._id);
        setEditCategory(expense.category);
        setEditAmount(expense.amount);
        setEditComments(expense.comments || '');
    };

    // Cancel editing
    const cancelEditing = () => {
        setEditingId(null);
    };

    // Save edited expense
    const saveEdit = (id) => {
        axios
            .put(
                `http://localhost:5000/api/expenses/${id}`,
                { category: editCategory, amount: editAmount, comments: editComments },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then((res) => {
                setExpenses(expenses.map((expense) => (expense._id === id ? res.data : expense)));
                setEditingId(null);
            })
            .catch((err) => console.error(err));
    };

    return (
        <table className="w-full bg-white mt-6 shadow-md rounded-lg">
            <thead>
                <tr className="bg-gray-200 text-gray-600">
                    <th className="p-3">Category</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Comments</th>
                    <th className="p-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense._id} className="border-b">
                        {editingId === expense._id ? (
                            <>
                                {/* Editable row */}
                                <td className="p-3">
                                    <input
                                        type="text"
                                        value={editCategory}
                                        onChange={(e) => setEditCategory(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </td>
                                <td className="p-3">
                                    <input
                                        type="number"
                                        value={editAmount}
                                        onChange={(e) => setEditAmount(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </td>
                                <td className="p-3">
                                    <input
                                        type="text"
                                        value={editComments}
                                        onChange={(e) => setEditComments(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md"
                                    />
                                </td>
                                <td className="p-3 flex space-x-2">
                                    <button
                                        onClick={() => saveEdit(expense._id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={cancelEditing}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </>
                        ) : (
                            <>
                                {/* Non-editable row */}
                                <td className="p-3">{expense.category}</td>
                                <td className="p-3">{expense.amount}</td>
                                <td className="p-3">{expense.comments || 'N/A'}</td>
                                <td className="p-3 flex space-x-2">
                                    <button
                                        onClick={() => startEditing(expense)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteExpense(expense._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
