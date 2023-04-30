import React from "react";

function NameAndCheckbox({ onClick, title, count }) {
  return (
    <div onClick={onClick}>
      <div className="category-items">
        <input type="checkbox" className="items-checkbox" />
        <p className="item-names"> {title}</p>
        <p className="item-count">({count}) </p>
      </div>
    </div>
  );
}

export default NameAndCheckbox;
