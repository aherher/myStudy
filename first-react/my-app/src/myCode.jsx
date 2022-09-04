import React from "react";
import './App.css';


function MyGallery(number) {
  return (
    <li>{number.num}</li>
  )
}

const lists = document.querySelectorAll(".gallery li");

lists.forEach(test => {
  test.addEventListener("click", () => {
    alert();
  })
});


export default MyGallery