import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBill, filterByCategory } from "../store/billSlice";
import { formatDate } from "../utils/billUtils";
import { Trash2 } from "lucide-react";
import "./BillList.css";

const categories = [
  "FoodNDining",
  "utility",
  "shopping",
  "education",
  "Personal Care",
  "Travel",
];

export const BillList = () => {
  const dispatch = useDispatch();
  const { bills, filteredBills, selectedCategory, highlightedBills } =
    useSelector((state) => state.bills);

  const displayBills = selectedCategory ? filteredBills : bills;
  const totalAmount = displayBills.reduce(
    (sum, bill) => sum + parseFloat(bill.amount),
    0
  );

  return (
    <div className="bill-list-container">
      <div className="bill-list-header">
        <select
          value={selectedCategory || ""}
          onChange={(e) => dispatch(filterByCategory(e.target.value || null))}
          className="category-filter"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="total-amount">Total: ₹{totalAmount.toFixed(2)}</div>
      </div>

      <div className="bill-list-table-container">
        <table className="bill-list-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayBills.map((bill) => (
              <tr
                key={bill.id}
                className={
                  highlightedBills.includes(bill.id) ? "highlighted" : ""
                }
              >
                <td>{bill.description}</td>
                <td>{bill.category}</td>
                <td>₹{parseFloat(bill.amount).toFixed(2)}</td>
                <td>{formatDate(bill.date)}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeBill(bill.id))}
                    className="delete-button"
                  >
                    <Trash2 className="delete-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
