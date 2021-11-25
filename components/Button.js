import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Button.module.css'

const Button = ({ type, text, loading }) => (
  <button
    type={type}
    className={style.button}
  >
    {loading ? (
      <div className={style.loading}>
        <FontAwesomeIcon icon={faCircleNotch} spin />
        <span>Loading...</span>
      </div>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default Button;
