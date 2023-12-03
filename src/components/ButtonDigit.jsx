import React from 'react';

const ButtonDigit = ({ value, className, onClick, ...props }) => (
  <button className={`w-fourth h-80 ${className}`} onClick={onClick(value)} {...props}>{value}</button>
);

export default ButtonDigit;
