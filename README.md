# Expense Tracker

Expense Tracker is a web application built with ReactJS and Tailwind CSS. It allows users to track their daily expenses with the ability to add, edit, and delete entries.

## Features

- Add new expenses
- Edit existing expenses
- Delete expenses
- View a list of all expenses

## Technologies Used

- ReactJS
- Tailwind CSS

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A modern web browser

### Installation

1. Clone the repository

```bash
git clone https://github.com/ehijeleb/expense-tracker.git
```

2. Navigate to the project directory

```
cd YOUR_REPOSITORY_NAME
```

3. Open 'index.html' in your web browser to  view the app

## Project Structure 

```
expense-tracker/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   ├── ExpenseItem.js
│   │   ├── EditExpenseModal.js
│   │   ├── ValidationModal.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
└── tailwind.config.js
```

## Usage

1. Add Expense: Use the form to add a new expense by providing a description and amount.
2.  Edit Expense: Click the "Edit" button next to an expense to modify its details.
3. Delete Expense: Click the "Delete" button next to an expense to remove it from the list

## License

Distributed under the MIT License.