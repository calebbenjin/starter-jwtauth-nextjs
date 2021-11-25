import React from 'react';
import { useField } from 'formik';
import FormError from './FormError';
import Input from './Input';

const FormInput = ({
  ariaLabel,
  name,
  type,
  placeholder
}) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Input
        field={field}
        ariaLabel={ariaLabel}
        name={field.name}
        type={type}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <FormError></FormError>
      ) : null}
    </>
  );
};

export default FormInput;
