import React, { useState } from 'react';
import './Order.css';

const Order = ({ onAddBill }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [dish, setDish] = useState('');
  const [table, setTable] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBill({ orderId, price, dish, table });
    setOrderId('');
    setPrice('');
    setDish('');
    setTable('');
  };

 
  const tableOptions=[
    'Table1',
    'Table2',
    'Table3',
  ]

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <label>
        Order ID:
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </label>

      <label>
        Choose Price:
        <input
          type="text"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <label>
        Choose Dish:
        <input
        type='text'
        placeholder='order dish'
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        
          />
        
      </label>

      <label>
        Choose Table:
        <select
          value={table}
          onChange={(e) => setTable(e.target.value)}
        >
          <option value="" disabled>
            Select Table
          </option>
          {tableOptions.map((tableOption) => (
            <option key={tableOption} value={tableOption}>
              {tableOption}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add Bill</button>
    </form>
  );
};

export default Order;
