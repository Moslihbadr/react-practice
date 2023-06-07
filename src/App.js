import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023,3,9),
      title: "Laptop",
      amount: 300,
    },
    {
      id: "e2",
      date: new Date(2023,4,12),
      title: "IPHONE",
      amount: 800,
    },
    {
      id: "e3",
      date: new Date(2023,5,7), 
      title: "TV",
      amount: 900,
    },
    {
      id: "e4",
      date: new Date(2023,6,5),
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
