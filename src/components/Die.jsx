import React from "react";

export default function Die(props) {
  return (
    <button
      className={"die-button " + (props.isHeld ? "isHeld" : "")}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
