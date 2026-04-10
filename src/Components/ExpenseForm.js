import React, { useState } from 'react'

export default function ExpenseForm({onAdd}) {

    const [title,setTitle] = useState("");
    const [amount,setAmount] =useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!title || !amount) return;
        onAdd({title,amount}); 
        setTitle("");
        setAmount("");


    }
  return (
    <div className='expenseForm'>
        <form onSubmit={handleSubmit}  >
        <h1>Expense Form</h1>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />
        <button>Add</button>
        </form>
    </div>
  )
}
