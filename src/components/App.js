import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {

  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  const handleSushiClick = sushi => {
    setPlates([...plates, sushi])
    setMoney(money - sushi.price)
  } 

  return (
    <div className="app">
      <SushiContainer onSushiClick={handleSushiClick}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
