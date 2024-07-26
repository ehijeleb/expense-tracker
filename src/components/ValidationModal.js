// src/components/ValidationModal.js
import React from 'react';

const ValidationModal = ({ message, closeModal }) => {
return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded">
        <h2 className="text-2xl mb-4">Validation Error</h2>
        <p>{message}</p>
        <button
        onClick={closeModal}
        className="bg-red-500 text-white p-2 mt-4"
        >
        Close
        </button>
    </div>
    </div>
);
};

export default ValidationModal;
