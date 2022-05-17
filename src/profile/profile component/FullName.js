import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
const FullName = (props) => {
  console.log(props);
  const myStyle = {
    textAlign: "center",
    color: "rgb(9, 30, 90)",
    textTransform: "uppercase",
    fontFamily: "Roboto Condensed",
    margin: "auto",
  };
  return (
    <div>
      <h1 style={myStyle}>
        {" "}
        {props.firstName} {props.lastName}
      </h1>
      {props.children}
    </div>
  );
};

export default FullName;

FullName.prototype={
  firstName: propTypes.object,
  lastName:propTypes.string
}
