import React from 'react';
import css from './button.css';
const Button = ({onAction, btnText}) => {
  return ( <button onClick={onAction}>{btnText}</button> )
}

export default Button;