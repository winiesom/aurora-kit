import React from "react";

const InputField = ({ placeholder, onChange }) => {
  return <input type="text" placeholder={placeholder} onChange={onChange} />;
};

export default InputField;
