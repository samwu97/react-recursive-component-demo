import React, { useState } from "react";
import Styles from "./Dropdown.module.css";
import DropdownItem from "../DropdownItem/DropdownItem";

function Dropdown(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div onClick={handleDropdown} className={Styles.dropdownHeader}>
        <div className={Styles.dropdownHeaderContainer}>
          <div>{props.selectedItem.name}</div>
          <div className={Styles.dropdownArrow}>&darr;</div>
        </div>
        {showDropdown && (
          <div>
            {props.arr.map((item) => (
              <div key={item.id}>
                <DropdownItem
                  item={item}
                  setSelectedItem={props.setSelectedItem}
                  selectedItem={props.selectedItem}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
