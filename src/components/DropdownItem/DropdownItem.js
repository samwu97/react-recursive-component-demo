import React from "react";
import Styles from "./DropdownItem.module.css";

function DropdownItem(props) {
  if (props.selectedItem.id === props.item.id) {
    return (
      <div
        onClick={() => props.setSelectedItem(props.item)}
        className={Styles.dropdownItemContainerSelected}
      >
        {props.item.name}
      </div>
    );
  }
  return (
    <div
      onClick={() => props.setSelectedItem(props.item)}
      className={Styles.dropdownItemContainer}
    >
      {props.item.name}
    </div>
  );
}

export default DropdownItem;
