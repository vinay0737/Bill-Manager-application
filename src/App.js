import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { BillForm } from "./components/BillForm";
import { BillList } from "./components/BillList";
import { BillChart } from "./components/BillChart";
import { BudgetOptimizer } from "./components/BudgetOptimizer";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Bill Manager
          </h1>
          <div className="space-y-8">
            <BillForm />
            <BudgetOptimizer />
            <BillList />
            <BillChart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
