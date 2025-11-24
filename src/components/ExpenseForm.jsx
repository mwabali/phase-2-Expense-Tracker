import { useState, useEffect } from 'react';



function ExpenseForm({ addExpense, editingExpense, updateExpense, setEditingExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
    }
  }, [editingExpense]);
