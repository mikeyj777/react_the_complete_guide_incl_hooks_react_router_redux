import './css/ExpenseItem.css';

function ExpenseItem() {
    // only 1 root div
    return (
        <div className="expense-item">
            <div>March 28, 2021</div>
            <h2 className="expense-item__description">Car Insurance</h2>
            <div className="expense-item__price">$294.17</div>
        </div>
    );
}

export default ExpenseItem;
