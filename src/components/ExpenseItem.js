import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = 'Laptop';
  const expenseAmount = 300;
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return (
    <div className="expenseItem">
      <div>{expenseDate.toLocaleDateString("en-US", options)}</div>
      <div className='expenseItem-description'>
        <h2>{expenseTitle}</h2>
        <div className='expenseItem-amount'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;