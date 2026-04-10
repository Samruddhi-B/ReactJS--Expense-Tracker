import React from 'react'


export default function ExpenseList({expenses,onDelete}) {
  return (
    <div className='expenseList'>
        {expenses.length === 0 &&  <div className='logo'> <img src="/1130792_OQ6UTT0.jpg"  alt="noexpense"/> <p>No expenses yet!</p> </div>}

        {expenses.map( (item) => (
            <div key={item.id} className='list'>
                <span>{item.title}</span>
                <span>{item.amount}</span>
                <button onClick={() => onDelete(item.id)} > <i class="fa-solid fa-circle-xmark" style={{color:"#800000" }}></i></button>
            </div>
    ))}

    </div>
  )
}
