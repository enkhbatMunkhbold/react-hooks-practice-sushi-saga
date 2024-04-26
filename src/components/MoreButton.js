import React from "react";

function MoreButton({ start, setStart }) {

  function handleClick() {
    setStart(start + 4)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
