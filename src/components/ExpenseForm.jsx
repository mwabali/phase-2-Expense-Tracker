import { useState, useEffect } from 'react';



function ExpenseForm({ addExpense, editingExpense, updateExpense, setEditingExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  