import { useState } from "react";

const NewExpenseForm = () => {
  const [entredTitle, setTitle] = useState('');
  const [entredAmount, setAmount] = useState('');
  const [entredDate, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate)
    }
    console.log(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (

    <form onSubmit={submitHandler}>
      <div className="new-expense-form-container">
        <div className="new-expense-form-inputs">
          <div className="new-expense-title">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={entredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense-amount">
            <label htmlFor="amount">Amount</label>
            <input type="number" min={0.01} step={0.01} value={entredAmount} id="amount" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense-date">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={entredDate} onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense-btn">
          <button type="submit" className="add-expense">Add Expense</button> 
        </div>
      </div>
    </form>
  );
}

export default NewExpenseForm;