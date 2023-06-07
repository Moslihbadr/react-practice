import "./App.css";
import Expenses from "./components/Epenses";

const App = () => {
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
      <Expenses expense = {expenses}/> 
    </div>
  );
}

export default App;
