import { ExpensesCard } from "./ExpensesCard";

export const Expenses = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((el) => {
        return <ExpensesCard el={el} key={el.id} onDelete={props.onDelete} />;
      })}
      {props.children}
    </div>
  );
};
