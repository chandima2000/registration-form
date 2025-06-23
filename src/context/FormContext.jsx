import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const updateForm = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
