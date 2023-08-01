const FunctionUtils = () => {
  const validateEmail = Email => {
    console.warn(Email);
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return emailRegex.test(Email);
  };

  const validatePassword = Password => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(Password);
  };

  const validatePasswordLength = number => {
    if (number.length >= 8) {
      return true;
    }
    return false;
  };

  return {
    validateEmail,
    validatePassword,
    validatePasswordLength,
  };
};

export default FunctionUtils;
