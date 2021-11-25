import React from 'react'
import style from '../styles/Input.module.css'

const Input = ({ ariaLabel, name, type, placeholder, field }) => (
  <input
    {...field}
    aria-label={ariaLabel}
    name={name}
    type={type}
    className={style.input}
    placeholder={placeholder}
  />
)

export default Input
