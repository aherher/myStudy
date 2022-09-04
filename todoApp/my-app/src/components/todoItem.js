import React from "react";


function TodoItem(props) {
  return (
    <div className="theItem">
      {props.item}
    </div>
  )
}

export default TodoItem;