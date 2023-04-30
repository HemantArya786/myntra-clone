import React from "react";

function NameAndCheckbox({ title, count }) {
  return (
    <div>
      <div className="category-items">
        <input type="checkbox" className="items-checkbox" />
        <p className="item-names"> {title}</p>
        <p className="item-count">({count}) </p>
      </div>
    </div>
  );
}

export default NameAndCheckbox;
