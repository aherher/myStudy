import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let count = 0;
  const [count2, setCount2] = useState(0)
  const plus = () => {
    count = count + 1;
    setCount2(count2 + 1);
    console.log(count, count2);
  }
  return (
    <div className="App">
      <main>
        <div>{count}</div>
        <div>state:{count2}</div>
        <button onClick={plus}>등록</button>
      </main>
    </div>
  );
}

export default App;
