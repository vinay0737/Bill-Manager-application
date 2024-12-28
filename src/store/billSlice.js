import { createSlice } from "@reduxjs/toolkit";
import { findOptimalBills } from "../utils/billUtils";

const initialState = {
  bills: [
    {
      id: 1,
      description: "Dominoes",
      category: "FoodNDining",
      amount: "430",
      date: "01-02-2020",
    },
  ],
  filteredBills: [],
  selectedCategory: null,
  monthlyBudget: 50000,
  highlightedBills: [],
};

const billSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
      state.filteredBills = state.selectedCategory
        ? state.bills.filter((bill) => bill.category === state.selectedCategory)
        : state.bills;
    },
    editBill: (state, action) => {
      const index = state.bills.findIndex(
        (bill) => bill.id === action.payload.id
      );
      if (index !== -1) {
        state.bills[index] = action.payload;
        state.filteredBills = state.selectedCategory
          ? state.bills.filter(
              (bill) => bill.category === state.selectedCategory
            )
          : state.bills;
      }
    },
    removeBill: (state, action) => {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
      state.filteredBills = state.selectedCategory
        ? state.bills.filter((bill) => bill.category === state.selectedCategory)
        : state.bills;
    },
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredBills = action.payload
        ? state.bills.filter((bill) => bill.category === action.payload)
        : state.bills;
    },
    updateHighlightedBills: (state) => {
      const result = findOptimalBills(state.bills, state.monthlyBudget);
      state.highlightedBills = result;
    },
    setMonthlyBudget: (state, action) => {
      state.monthlyBudget = action.payload;
    },
  },
});

export const {
  addBill,
  editBill,
  removeBill,
  filterByCategory,
  updateHighlightedBills,
  setMonthlyBudget,
} = billSlice.actions;

export default billSlice.reducer;
