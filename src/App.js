// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import EditExpenseModal from './components/EditExpenseModal';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const openEditModal = (index) => {
    setCurrentExpense({ ...expenses[index], index });
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const editExpense = (updatedExpense) => {
    const newExpenses = expenses.map((expense, i) =>
      i === updatedExpense.index ? updatedExpense : expense
    );
    setExpenses(newExpenses);
  };

  return (
    <div className="App">

    <div class="min-h-screen bg-background text-foreground p-4">
      <div class="max-w-xl mx-auto bg-card p-6 rounded-lg shadow-md">
        <Header />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} openEditModal={openEditModal} />
      </div>
    </div>

      
      <EditExpenseModal
        currentExpense={currentExpense}
        isEditing={isEditing}
        closeEditModal={closeEditModal}
        editExpense={editExpense}
      />
    </div>
  );
};

export default App;
