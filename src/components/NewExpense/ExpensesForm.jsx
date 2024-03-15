import { useState } from "react";
import Button from "../UI/Button";
import { Input } from "../UI/Input";
import "./NewExpense.css";

export const ExpensesForm = ({ onClickOpen, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  console.log(inputText)
  
  const [inputNumber, setInputNumber] = useState(null);
  const [inputDate, setInputDate] = useState(null);
  const [product, setProducts] = useState([]);

  function getInputValue(e) {
    setInputText(e.target.value);
  }

  function getNuberInput(e) {
    setInputNumber(e.target.value);
  }

  function getInputDate(e) {
    setInputDate(e.target.value);
  }
  function submitHandler() {
    const newProduct = {
      title: inputText,
      price: inputNumber,
      date: inputDate,
    };
    onSubmit(prevProducts => [...prevProducts, newProduct]);
    setInputText("");
    setInputNumber(0); 
    setInputDate(null); 
  }
console.log(product)

  return (
    <div style={{ height: "250px" }}>
      <Input
        type="text"
        placeholder="Загалог"
        children="Загалог"
        value={inputText}
        onChange={getInputValue}
      />
      <Input
        type="number"
        placeholder="Количество"
        children="Количество"
        value={inputNumber}
        onChange={getNuberInput}
      />
      <Input
        type="date"
        placeholder="Дата"
        children="Дата"
        value={inputDate}
        onChange={getInputDate}
      />
      <div className="ContainerButton">
        <Button onClick={onClickOpen} marginRight="20px">
          Отмена
        </Button>
        <Button onClick={submitHandler}>Добавит </Button>
      </div>

      <ul className="ul">
        {product.map((el) => {
          return (
            <div>
              <li className="li">{el.title}</li>
              <li className="li">{el.price}</li>
              <li className="li">{el.date}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
