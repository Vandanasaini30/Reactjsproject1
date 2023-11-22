import React, { useState } from 'react';
import Order from './Component/Order';
import BillTable from './Component/BillTable';
import './App.css'; // Add this line to import your CSS file

function App() {
  const [bills, setBills] = useState([]);

  const handleAddBill = (newBill) => {
    setBills([...bills, newBill]);
  };
  
  return (
    <div className="app">
      <h1>Order Management System</h1>
      <Order onAddBill={handleAddBill} />
      <BillTable bills={bills} />
    </div>
  );
}

export default App;
