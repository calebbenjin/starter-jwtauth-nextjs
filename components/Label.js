import React from 'react';
import style from '../styles/Label.module.css'

const Label = ({ text }) => (
  <label className={style.label}>{text}</label>
);

export default Label;
