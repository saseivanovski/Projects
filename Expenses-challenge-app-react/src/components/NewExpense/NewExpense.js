import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [hide, setHide] = useState(false);

  const hideHandler = () => {
    setHide(true);
  };

  const cancelHideHandler = () => {
    setHide(false);
  };

  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = {
      ...enteredExpanseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setHide(false);
  };

  return (
    <div className="new-expense">
      {hide === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelHideHandler={cancelHideHandler}
        />
      ) : (
        <button onClick={hideHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
