import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../styles/FormSuccess.module.css'

const FormSuccess = ({ text }) => (
  <section className={style.container}>
    <div className={style.text}>
      <FontAwesomeIcon icon={faCheckCircle} />
      <span>{text}</span>
    </div>
  </section>
);

export default FormSuccess;
