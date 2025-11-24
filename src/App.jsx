import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import './App.css';

function App() {
  // Initialize expenses from localStorage
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('All');
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const updateExpense = (id, updatedExpense) =>
    setExpenses(expenses.map(e => e.id === id ? updatedExpense : e));
  const deleteExpense = (id) =>
    setExpenses(expenses.filter(e => e.id !== id));

  const filteredExpenses = filter === 'All'
    ? expenses
    : expenses.filter(e => e.category === filter);

  const total = filteredExpenses.reduce((sum, e) => sum + Number(e.amount), 0);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        updateExpense={updateExpense}
        setEditingExpense={setEditingExpense}
      />
      <ExpenseFilter filter={filter} setFilter={setFilter} />
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        setEditingExpense={setEditingExpense}
      />
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default App;
