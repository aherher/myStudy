import React from "react";
import TodoItem from './todoItem';

function TodoBorad(props) {

  return (
    <div>
      <h1>Todo lists</h1>
      {props.todoList.map((item) => <TodoItem item={item} />)}
    </div>
  )
}

export default TodoBorad;