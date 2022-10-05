import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //it is best practice to separate large chunks of JS logic from your JSX code, as shown below
  return (
    <div className="expense-item">
      <ExpenseDate className="expense-date" date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
