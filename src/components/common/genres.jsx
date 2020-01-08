import React, { Component } from "react";

const Genres = props => {
  const { items, valueProperty, textProperty } = props;
  return (
    <ul class="list-group">
      {items.map(item => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
