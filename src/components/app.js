import React, { useEffect, useState, useCallback } from "react";

import "./app.scss";

let message = [];

const App = () => {

  const [counter, setCounter] = useState('');

  const sendMessage = () => {
      message.push(`Нормально ${message.length + 1}`);
      console.log(message);

    setCounter(message[message.length - 1] );
  }


  return (
    <>
      <h1>
        Last message
      </h1>
      <h2>{counter}</h2>
      <button onClick={sendMessage} className="button-line">Send message</button>
    </>
  );
};



export default App;

