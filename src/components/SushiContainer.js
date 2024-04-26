import React, { useEffect, useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ onSushiClick }) {

  const [sushis, setSushis] = useState([])
  const [start, setStart] = useState(0)

  const API = "http://localhost:3001/sushis";

  useEffect(() => {
    fetch(API).then(res => res.json()).then(data => setSushis(data))
  }, [])

  const renderSushis = [...sushis].splice(start, 4).map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} onSushiClick={onSushiClick}/>
  })
  

  return (
    <div className="belt">
      {renderSushis}
      <MoreButton start={start} setStart={setStart}/>
    </div>
  );
}

export default SushiContainer;
