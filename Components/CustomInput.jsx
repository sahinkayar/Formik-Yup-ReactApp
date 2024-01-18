import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...props }) {
  const [Field, meta] = useField(props);

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...Field} className={meta.error ? "ınputClass" : ""} />{" "}
      {meta.error && <div className="Errors">{meta.error}</div>}{" "}
    </div>
  );
}

export default CustomInput;
