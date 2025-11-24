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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const expenseData = { id: editingExpense ? editingExpense.id : Date.now(), title, amount, category };

    if (editingExpense) {
      updateExpense(editingExpense.id, expenseData);
      setEditingExpense(null);
    } else {
      addExpense(expenseData);
    }

    setTitle('');
    setAmount('');
    setCategory('Food');
  };
