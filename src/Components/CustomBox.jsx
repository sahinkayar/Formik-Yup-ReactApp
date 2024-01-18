import { useField } from "formik";
import React from "react";

function CustomBox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="Checkbox">
      <input type="checkbox" {...field} {...meta} />
      <span>I accept the terms of Conditions</span>
      {meta.error && <div className="Errors">{meta.error}</div>}{" "}
    </div>
  );
}

export default CustomBox;
