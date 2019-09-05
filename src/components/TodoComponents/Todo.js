import React from 'react';

import './Todo.css';

const Todo = props => {
  return (
    <div
      className={props.todo.completed ? 'complete' : ''}
      onClick={() => {
        props.toggleComplete(props.todo.id);
      }}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
