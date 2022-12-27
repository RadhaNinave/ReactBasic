import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./Date";

function ExpenseItem(props) {
 
  function deleteExpense(){
    const parentNode = document.querySelector('.expense-item');
    console.log(parentNode);
   
    parentNode.remove(parentNode);
}


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete</button>
    </Card>
  );
}
export default ExpenseItem;
