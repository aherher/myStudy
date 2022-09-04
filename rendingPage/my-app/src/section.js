import React from "react";
import './App.css';

function Section(props) {
  return (
    <section id={props.class}>
      <p>{props.text}</p>
    </section>
  )
}

export default Section