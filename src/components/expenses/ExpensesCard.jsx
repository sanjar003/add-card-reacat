
import styles from "./ExpensesCard.module.css"

export const ExpensesCard = ({ el, onDelete }) => {
  return (
    <div style={{ border: "1px solid" }}>
    
      <h3 className={styles['ElTitle']}>{el.title}</h3>
      <div>
        <div >price{el.price}</div>
        <button className={styles['btn']} onClick={() => onDelete(el.id)}>delete</button>
      </div>
    </div>
  );
};
