import "./css/ExpenseItem.css";

function ExpenseItem(props) {

    // only 1 root div
    return (
        <div className="expense-item">
            <div> {props.date.toLocaleDateString()} </div>
            <h2 className="expense-item__description"> {props.title} </h2>
            <div className="expense-item__price">${props.amount} </div>
        </div>
    );
}

export default ExpenseItem;
