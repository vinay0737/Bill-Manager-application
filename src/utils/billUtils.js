import { parse, format } from "date-fns";


export const formatDate = (dateString) => {
  const date = parse(dateString, "dd-MM-yyyy", new Date());
  return format(date, "MMM dd, yyyy");
};


export const findOptimalBills = (bills, budget) => {
  
  const billsWithValue = bills.map((bill, index) => ({
    index,
    amount: parseFloat(bill.amount),
  }));

 
  billsWithValue.sort((a, b) => a.amount - b.amount);

  const result = [];
  let currentSum = 0;

  
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
