function ExpenseItem({ expense, deleteExpense, setEditingExpense }) {
  return (
    <div className="expense-item">
      <span>{expense.title} - ${expense.amount} [{expense.category}]</span>
      <button onClick={() => setEditingExpense(expense)}>Edit</button>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
}
export default ExpenseItem;