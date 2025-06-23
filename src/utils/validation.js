export function validateStepOne(data) {

  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  }
  return errors;

}

export function validateStepTwo(data) {

  const errors = {};
  if (!data.password || data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;

}
