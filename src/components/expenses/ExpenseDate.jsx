import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate().toString().padStart(2, '0');

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
