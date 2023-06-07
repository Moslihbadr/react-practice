import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

  return (
    <div className="expenseItem">
      <ExpenseDate date= {props.date} />
      <div className='expenseItem-description'>
        <h2>{props.title}</h2>
        <div className='expenseItem-amount'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;