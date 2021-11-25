import React from 'react';
import style from '../styles/FormError.module.css'

const FormError = ({ text }) => (
  <span className={style.formError}>{text}</span>
);

export default FormError;
