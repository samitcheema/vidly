import React, { Component } from "react";

const Genres = props => {
  const {
    items,
    valueProperty,
    textProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul class="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "Pointer" }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Genres.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Genres;
