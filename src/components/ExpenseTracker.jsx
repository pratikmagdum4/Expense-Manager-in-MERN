import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import PieChart from './PieChart';
import axios from 'axios';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const token = localStorage.getItem('token');
console.log("Token is ",token)
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/expenses', {
                headers: { Authorization: token },
            })
            .then((res) => setExpenses(res.data))
            .catch((err) => console.log(err));
    }, [token]);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Expense Tracker</h1>
            <ExpenseForm setExpenses={setExpenses} token={token} />
            <ExpenseTable expenses={expenses} setExpenses={setExpenses} token={token} />
            <PieChart expenses={expenses} />
        </div>
    );
};

export default ExpenseTracker;
