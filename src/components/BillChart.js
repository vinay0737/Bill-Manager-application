import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./BillChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const BillChart = () => {
  const { bills } = useSelector((state) => state.bills);

  const monthlyData = bills.reduce((acc, bill) => {
    const month = bill.date.substring(3, 10); // Get MM-YYYY
    acc[month] = (acc[month] || 0) + parseFloat(bill.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: "Monthly Expenses",
        data: Object.values(monthlyData),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Billing Cycle",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bill-chart-container">
      <Line data={data} options={options} />
    </div>
  );
};
