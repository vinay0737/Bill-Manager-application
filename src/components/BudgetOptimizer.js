import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMonthlyBudget, updateHighlightedBills } from "../store/billSlice";
import "./BudgetOptimizer.css";

export const BudgetOptimizer = () => {
  const dispatch = useDispatch();
  const { monthlyBudget } = useSelector((state) => state.bills);

  const handleBudgetChange = (e) => {
    const value = parseFloat(e.target.value);
    dispatch(setMonthlyBudget(value));
  };

  const handleOptimize = () => {
    dispatch(updateHighlightedBills());
  };

  return (
    <div className="budget-optimizer-container">
      <h2 className="budget-optimizer-title">Budget Optimizer</h2>
      <div className="budget-optimizer-controls">
        <div className="budget-input-container">
          <label className="budget-label">Monthly Budget</label>
          <input
            type="number"
            value={monthlyBudget}
            onChange={handleBudgetChange}
            className="budget-input"
          />
        </div>
        <button onClick={handleOptimize} className="optimize-button">
          Optimize Bills
        </button>
      </div>
    </div>
  );
};
