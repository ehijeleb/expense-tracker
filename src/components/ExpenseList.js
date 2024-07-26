// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense, openEditModal }) => {
return (
    <div>
    {expenses.map((expense, index) => (
        <ExpenseItem
        key={index}
        expense={expense}
        index={index}
        deleteExpense={deleteExpense}
        openEditModal={openEditModal}
        />
    ))}
    </div>
);
};

export default ExpenseList;
