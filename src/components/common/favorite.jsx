import React, { Component } from "react";

const favorite = props => {
  let classes = "fa fa-heart";
  if (!props.favorited) classes += "-o";

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "Pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default favorite;
