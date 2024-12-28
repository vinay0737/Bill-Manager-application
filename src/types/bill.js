// Bill object structure
export const Bill = {
  id: 0, // Unique identifier for the bill
  description: "", // Description of the bill
  category: "", // Category of the bill (e.g., FoodNDining, Utility)
  amount: "", // Amount of the bill as a string
  date: "", // Date of the bill in string format (e.g., DD-MM-YYYY)
};

// Initial state for managing bills
export const BillState = {
  bills: [], // Array of all bills
  filteredBills: [], // Array of bills filtered by selected category
  selectedCategory: null, // Currently selected category for filtering
  monthlyBudget: 50000, // Default monthly budget
  highlightedBills: [], // Array of highlighted bill IDs (optimized bills)
};
