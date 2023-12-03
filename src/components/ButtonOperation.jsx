import React from 'react';

// TODO: what needs to happen here in order to update the calculator values?
const ButtonOperation = ({ className, label, value, onClick, ...props }) => (
  <button className={`w-fourth h-80 ${className}`}  onClick={onClick(value)} {...props}>{label}</button>
);

export default ButtonOperation;
