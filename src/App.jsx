import React, { useState } from "react";
import "./App.css";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";

const productDate = [
  {
    title: "alma",
    price: 120,
    data: new Date(2023, 11, 25),
    id: "1",
  },
  {
    title: "Car",
    price: 200,
    data: new Date(2023, 11, 25),
    id: "2",
  },
  {
    title: "Flower",
    price: 30,
    data: new Date(2023, 11, 25),
    id: "3",
  },
];

function App() {
  const [newProduct, setNewProduct] = useState(productDate);
  function deleteExpenses(id) {
    const newDate = newProduct.filter((el) => el.id !== id);
    setNewProduct(newDate);
  }
  console.log();

  return (
    <div className="ContainerRoot">
      <NewExpense onSubmit={setNewProduct} />
      <Expenses data={newProduct} onDelete={deleteExpenses} />
    </div>
  );
}

export default App;
