import { parse, format } from "date-fns";

// Function to format date strings from 'dd-MM-yyyy' to 'MMM dd, yyyy'
export const formatDate = (dateString) => {
  const date = parse(dateString, "dd-MM-yyyy", new Date());
  return format(date, "MMM dd, yyyy");
};

// Function to find optimal bills within a given budget
export const findOptimalBills = (bills, budget) => {
  // Map bills to include indices and parsed amounts
  const billsWithValue = bills.map((bill, index) => ({
    index,
    amount: parseFloat(bill.amount),
  }));

  // Sort bills by amount in ascending order
  billsWithValue.sort((a, b) => a.amount - b.amount);

  const result = [];
  let currentSum = 0;

  // Select bills within the budget
  for (const bill of billsWithValue) {
    if (currentSum + bill.amount <= budget) {
      result.push(bills[bill.index].id);
      currentSum += bill.amount;
    } else {
      break;
    }
  }

  return result;
};
