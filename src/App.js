import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const expenses = [
    {
      date: new Date().toLocaleDateString("en-US", options),
      title: "Laptop",
      amount: 300,
    },
    {
      date: new Date().toLocaleDateString("en-US", options),
      title: "IPHONE",
      amount: 800,
    },
    {
      date: new Date().toLocaleDateString("en-US", options),
      title: "TV",
      amount: 900,
    },
    {
      date: new Date().toLocaleDateString("en-US", options),
      title: "New Car",
      amount: 15000,
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      >
      </ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      >
      </ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      >
      </ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      >
      </ExpenseItem>
    </div>
  );
}

export default App;
