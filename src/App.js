import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Clean Litter',
          id: 1,
          completed: false
        },
        {
          task: 'Sleep',
          id: 2,
          completed: false
        }
      ]
    };
  }

  addTodo = (event, taskName) => {
    event.preventDefault();

    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
