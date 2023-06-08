import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
import './ExpenseItem.css'

const ExpenseItem = props => {
  const [amount, setAmount] = useState(props.amount);

  const increase = () => {
    setAmount(amount + 10);
  }
  
  return (
    <div className="expenseItem">
      <ExpenseDate date= {props.date} />
      <div className='expenseItem-description'>
        <h2>{props.title}</h2>
        <div className='expenseItem-amount'>${amount}</div>
      </div>
      <button onClick={increase}>increase amount by $10</button>
    </div>
  );
}

export default ExpenseItem;