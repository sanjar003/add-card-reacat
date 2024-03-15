import React from "react";
import "./Input.css";

export const Input = (props) => {
  return (
    <div>
        <label className="label" htmlFor={props.id}></label>
      <input
        className="input"
        id={props.type}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
