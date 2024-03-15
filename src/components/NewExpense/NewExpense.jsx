import Button from "../UI/Button";
import { ExpensesForm } from "./ExpensesForm";
import { useState } from "react";
import "./NewExpense.css";

export const NewExpense = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  function opneAndCloseExpensesFormHandler() {
    setShowForm((prev) => !prev);
  }
  return (
    <div className={{ backgroundColor: "#AD9BE9", padding: "20px" }}>
      {showForm ? (
        <ExpensesForm
          onClickOpen={opneAndCloseExpensesFormHandler}
          onSubmit={onSubmit}
        />
      ) : (
        <Button  onClick={opneAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}
    </div>
  );
};
