import React from "react";
import styles from "./SelectDropDown.module.css";
function SelectDropDown({
  id,
  label,
  className,
  placeHolder,
  options,
  ...delegated
}) {
  const newClassName = className + " " + styles["select"];
  return (
    <select id={id} {...delegated} className={newClassName} aria-label={label}>
      <option value="" disabled>
        {placeHolder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default React.memo(SelectDropDown);
