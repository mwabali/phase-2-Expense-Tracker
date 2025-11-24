import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense, setEditingExpense }) {
  return (
    <div>
      {expenses.length === 0 ? <p>No expenses yet</p> : expenses.map(e => (
        <ExpenseItem key={e.id} expense={e} deleteExpense={deleteExpense} setEditingExpense={setEditingExpense} />
      ))}
    </div>
  );
}
export default ExpenseList;