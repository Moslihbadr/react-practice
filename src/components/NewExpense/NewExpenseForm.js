const NewExpenseForm = () => {
  return (
    <form>
      <div className="new-expense-form-container">
        <div className="new-expense-form-inputs">
          <div className="new-expense-title">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" />
          </div>
          <div className="new-expense-amount">
            <label htmlFor="amount">Amount</label>
            <input type="number" min={0.01} step={0.01} id="amount" />
          </div>
          <div className="new-expense-date">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
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