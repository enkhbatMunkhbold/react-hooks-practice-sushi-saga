import React from "react";

function Table({ plates = [], money }) {
  
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const yourMoney = money <= 0 ? '0 money' : money

  return (
    <>
      <h1 className="remaining">
        You have: ${yourMoney} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
