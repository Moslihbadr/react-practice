import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear(); 
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className='expense-date'>
      <div className='month'>{month}</div>
      <div className='year'>{year}</div> 
      <div className='day'>{day}</div>
    </div>
  )
}

export default ExpenseDate;