import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CaroucelsComponent from "./components/carousels";
import DropDown from "./components/dropdown";
function App() {
  const [isTicking, setIsTicking] = useState(true);
  const [payment, setPayment] = useState(0);

  function handler() {
    setPayment(payment + 10);
    setIsTicking(!isTicking);
  }

  return (
    <div className="App">
      <CaroucelsComponent />
      <DropDown />
      <div>{`you have paid $${payment}`}</div>
      {isTicking ? (
        <img
          src="https://cdn.dribbble.com/users/158127/screenshots/3972213/media/c76e1fd4afa2f69b3feb0ab234da6ed2.gif"
          alt="bomb-ticking"
        />
      ) : (
        <img
          src="https://cdn.dribbble.com/users/1179280/screenshots/5704456/media/934a8bc167ec6c37dde823c7fe08f000.gif"
          alt="bomb-exploding"
        />
      )}
      <Button disabled={!isTicking} onClick={handler}>
        Switch
      </Button>
      <Button onClick={handler}>Pay 10 dollars</Button>
    </div>
  );
}

export default App;
