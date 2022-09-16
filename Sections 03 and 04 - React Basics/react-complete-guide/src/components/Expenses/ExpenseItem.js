import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    // const [count, setCount] = useState(0);

    const clickHandler = () => {
        setTitle(Math.floor(Math.random() * 2**64));
        // setCount(count+1);
        // console.log(count);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title} </h2>
                {/* <h2>{count} </h2> */}
                <div className="expense-item__price">${props.amount} </div>
                <button onClick={clickHandler}>New Title!!!</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;
