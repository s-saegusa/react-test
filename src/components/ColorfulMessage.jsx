import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>お元気ですか？</p>;
};

export default ColorfulMessage;
