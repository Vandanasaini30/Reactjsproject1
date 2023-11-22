import React from 'react';

const BillTable = ({ bills }) => {
  return (
    <table className="bill-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Price</th>
          <th>Dish</th>
          <th>Table</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill) => (
          <tr key={bill.orderId}>
            <td>{bill.orderId}</td>
            <td>{bill.price}</td>
            <td>{bill.dish}</td> 
            <td>{bill.table}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillTable;
