// src/components/ExpenseForm.js
import React, { useState } from "react";
import ValidationModal from "./ValidationModal";

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ description: "", amount: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      if (value === "" || /^[0-9\b]+$/.test(value)) {
        setExpense({ ...expense, [name]: value });
      }
    } else {
      setExpense({ ...expense, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.description && expense.amount) {
      addExpense(expense);
      setExpense({ description: "", amount: "" });
    } else {
      setModalMessage("Both description and amount fields are required.");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">

        <div className="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-500 mb-1">Description</label>
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleChange}
          placeholder="Enter expense description"
          className="w-full p-2 border border-input rounded-lg bg-background text-foreground"
        />
        </div>
        <div className="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-500 mb-1">Amount</label>
        <input
          type="text"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Enter Amount"
          className="w-full p-2 border border-input rounded-lg bg-background text-foreground"
        />
        </div>

      <button type="submit" class="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-900">Add Expense</button>
      </form>
      {showModal && (
        <ValidationModal message={modalMessage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default ExpenseForm;
