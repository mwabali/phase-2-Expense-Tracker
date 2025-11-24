# Expense Tracker React App

A fully styled **Expense Tracker** built with **React** and **Vite**. This app allows users to add, edit, delete, and filter expenses by category. It features a black full-page theme, hover effects, a submit button, and **persistent data using `localStorage`**.  

---

## Table of Contents
 
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
- [Available Scripts](#available-scripts)  
- [Project Structure](#project-structure)  
- [Persistence](#persistence)  
- [Styling](#styling)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

### Core Features

- Add a new expense with **title**, **amount**, and **category**.  
- Edit existing expenses.  
- Delete expenses.  
- Filter expenses by category (Food, Transport, Entertainment, Other).  
- Display **total expenses dynamically**.  
- Full-page **black theme** with centered components.  
- Hover effects on form and expense items.  
- Submit button for adding/updating expenses.  
- Responsive layout that fits **one page** without breaking scroll.  

### Advanced Features

- Persist expenses using **`localStorage`** so data is not lost on refresh.  
- Easy-to-style CSS using class-based layout.  

---

## Prerequisites

Before running the app, make sure you have:

- [Node.js](https://nodejs.org/) (v18+ recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- A modern web browser (**Chrome**, **Edge**, **Firefox**)  

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker


npm install
# or
yarn install

Start the development server

npm run dev
# or
yarn dev

Open the app in your browser

Open the URL displayed in the terminal (usually http://localhost:5173/).

Available Scripts
<!-- EDIT HERE: Update if you added more scripts -->

npm run dev – Start development server

npm run build – Build the app for production

npm run preview – Preview the production build

**Project Structure**
expense-tracker/
├─ public/           # Static assets
├─ src/
│  ├─ components/
│  │  ├─ ExpenseForm.jsx
│  │  ├─ ExpenseList.jsx
│  │  ├─ ExpenseItem.jsx
│  │  └─ ExpenseFilter.jsx
│  ├─ App.jsx        # Main app component
│  ├─ main.jsx       # Entry point
│  └─ App.css        # Styling
├─ package.json
├─ vite.config.js
└─ README.md


localStorage is used to save all expenses.

Expenses are loaded from localStorage when the app starts and automatically updated whenever a change occurs.