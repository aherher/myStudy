import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoBorad from './components/todoBoroard';

function App() {
  const [inputValue, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log(inputValue);
    setTodoList([...todoList, inputValue]);
  }

  return (
    <div className="App">
      <main>
        <input value={inputValue} onChange={(event) => setInput(event.target.value)} type="text" />
        <button onClick={addItem}>추가</button>
      </main>

      <TodoBorad todoList={todoList} />
    </div>
  );
}

export default App;
