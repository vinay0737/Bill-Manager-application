import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { format, parse } from "date-fns";
import { addBill } from "../store/billSlice";
import { Plus } from "lucide-react";
import "./BillForm.css";

const categories = [
  "FoodNDining",
  "utility",
  "shopping",
  "education",
  "Personal Care",
  "Travel",
];

export const BillForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    date: format(new Date(), "yyyy-MM-dd"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBill = {
      id: Date.now(),
      ...formData,
      date: format(
        parse(formData.date, "yyyy-MM-dd", new Date()),
        "dd-MM-yyyy"
      ),
    };
    dispatch(addBill(newBill));
    setFormData({
      description: "",
      category: "",
      amount: "",
      date: format(new Date(), "yyyy-MM-dd"),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bill-form">
      <div className="form-grid">
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
      </div>
      <button type="submit" className="submit-button">
        <Plus className="icon" />
        Add Bill
      </button>
    </form>
  );
};
