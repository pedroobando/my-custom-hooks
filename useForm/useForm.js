import { useState } from "react";

// Utilidad: Leer los textbox o cajas de texto cuando el input change cambie del formulario

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const reset = () => {
    setValues(initialState);
  };

  return [values, handleInputChange, reset];
};
