import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear(); 
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className="expenseItem">
      <div className='expense-date'>
        <div className='month'>{month}</div>
        <div className='year'>{year}</div> 
        <div className='day'>{day}</div>
      </div>
      <div className='expenseItem-description'>
        <h2>{props.title}</h2>
        <div className='expenseItem-amount'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;