import React from "react";
import "./ContentBox.css";

const ContentBox = (props) => {
  return <div className="box">{props.children}</div>;
};

export default ContentBox;
