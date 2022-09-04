import React from "react";
import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="header__head">
        <h1 className="header__logo">LOGO</h1>
        <nav className="header__nav">
          <div><a onClick={anker} href="#section01">영역1</a></div>
          <div><a onClick={anker} href="#section02">영역2</a></div>
          <div><a onClick={anker} href="#section03">영역3</a></div>
          <div><a onClick={anker} href="#section04">영역4</a></div>
        </nav>
      </div>
    </div>
  )
}

const aBtn = document.querySelectorAll("a");

aBtn.map((what) => console.log(what));



let anker = (event) => {
  let link = document.querySelector(event.target.getAttribute("href"))
  let thePosition = link.offsetTop;
  window.scroll({ top: thePosition, behavior: 'smooth' });
  event.target.classList.add("on");
  event.preventDefault();
}


export default Header