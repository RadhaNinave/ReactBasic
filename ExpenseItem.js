import React, { useState } from 'react';
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./Date";

function ExpenseItem(props) {
 
  /*function deleteExpense(){
    const parentNode = document.querySelector('.expense-item');
    console.log(parentNode);
   
    parentNode.remove(parentNode);*/
    const[myamount,setAmount]=useState(props.amount);
    const updateAmount =()=>{
      setAmount('100$')
      console.log(myamount)
    }



  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{myamount}</div>
      </div>
      <button onClick={updateAmount}>UpdateAmount</button>
    </Card>
  );
}
export default ExpenseItem;
