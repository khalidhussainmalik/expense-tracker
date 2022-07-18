import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  // const year = props.date.getFullYear()
  // const month = props.date.toLocalString('en-US', {month: 'long'})
  // const day = props.date.toISOString('en-US', {day: '2-digit'})
  return (
    <div className="expenseItem">
      <h4>{props.date.toLocaleDateString()}</h4>
      <div className="expenseItem__description">
        <h2>{props.title}</h2>
        <div className="expenseItem__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
