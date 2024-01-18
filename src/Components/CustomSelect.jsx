import React from "react";
import { useField } from "formik";
function CustomSelect({ label, ...props }) {
  const [Field, meta] = useField(props);

  return (
    <div>
      <label htmlFor="">{label}</label>
      <select {...Field} {...props} className={meta.error ? "ınputClass" : ""}>
        <option value="-">-</option>
        <option value="Bogazİçi">Bogazİçi Üni</option>
        <option value="Odtü">Odtü</option>
        <option value="İtü">İtü</option>
        <option value="İkü">İkü</option>
        <option value="Gsü">Gsü</option>
      </select>
      {meta.error && <div className="Errors">{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
