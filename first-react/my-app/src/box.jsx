import React from "react";
import './App.css';

function Box(props) {
  // const clickBtn = () => {
  //   alert();
  // }
  return (
    <div className='box'>
      box{props.number}
      {props.name}
      {/* <button onClick={clickBtn}>클릭해</button> */}
      <button>클릭해</button>
    </div>
  )
};

const btn = document.querySelectorAll("button");
btn.forEach(btn => {
  btn.style.display = "none";
});

alert();


export default Box

