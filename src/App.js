import React, { useState } from "react";
import "./App.css";

function App() {
  const [isTicking, setIsTicking] = useState(true);
  const [payment, setPayment] = useState(0);

  function handler() {
    setPayment(payment + 10);
    setIsTicking(!isTicking);
  }

  return (
    <div className="App">
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
      <button disabled={!isTicking} onClick={handler}>
        Switch
      </button>
      <button onClick={handler}>Pay 10 dollars</button>
    </div>
  );
}

export default App;
