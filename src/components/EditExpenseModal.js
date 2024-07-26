// src/components/EditExpenseModal.js
import React, { useState, useEffect } from "react";

const EditExpenseModal = ({
  currentExpense,
  isEditing,
  closeEditModal,
  editExpense,
}) => {
  const [expense, setExpense] = useState({ description: "", amount: "" });

  useEffect(() => {
    if (currentExpense) {
      setExpense(currentExpense);
    }
  }, [currentExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editExpense(expense);
    closeEditModal();
  };

  if (!isEditing) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Edit Expense</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="description"
            value={expense.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border border-input rounded-lg bg-background text-foreground"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            name="amount"
            value={expense.amount || ""}
            onChange={handleChange}
            placeholder="Amount"
            className="w-full p-2 border border-input rounded-lg bg-background text-foreground"
          />
        </div>
          <button
            type="submit"
            className="bg-green-600 text-white p-2 mt-2 w-full hover:bg-green-400 rounded-lg"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={closeEditModal}
            className="bg-red-600 text-white p-2 mt-2 w-full hover:bg-red-400 rounded-lg"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenseModal;
