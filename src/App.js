import { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';

function App() {

  const [expenses,setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses , {...expense,id:Date.now()}]);
  }

  const deleteExpense = (id) =>{
    setExpenses(expenses.filter((item) => item.id !== id))
  }

  const total = expenses.reduce((acc,curr) => acc + Number(curr.amount) , 0)

  return (
    <div className='expenseTracker'>

      <div className='heading'>
      <h1>Expense Tracker 💰</h1>
      <p>Your wallet's new best friend.</p>
      <img src='/8642496_3958663-removebg-preview.png' alt='vector' />
      <ExpenseForm onAdd={addExpense} />
      </div>

      <div className='total'>
      <h2>Total : {total} </h2>
      <ExpenseList onDelete ={deleteExpense} expenses={expenses} />
      </div>
    </div>
  );
}
  
export default App;
