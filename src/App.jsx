import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App(){
   const [expenses, setExpenses] = useState([]);
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
  return(

  )
}