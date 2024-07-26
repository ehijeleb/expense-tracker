// src/components/ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense, index, deleteExpense, openEditModal }) => {
return (
    <div className="p-4 border-b flex justify-between">
    <div>
        <p>{expense.description}</p>
        <p>£{expense.amount}</p>
    </div>
    <div>
        <button
        onClick={() => openEditModal(index)}
        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 mx-2"
        >
        Edit
        </button>
        <button
        onClick={() => deleteExpense(index)}
        className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500"
        >
        Delete
        </button>
    </div>
    </div>
);
};

export default ExpenseItem;
