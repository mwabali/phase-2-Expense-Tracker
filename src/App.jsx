import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';

function App(){
   const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');
  const [editingExpense, setEditingExpense] = useState(null);

  return(

  )
}