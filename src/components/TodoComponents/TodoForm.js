import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      taskName: ''
    };
  }

  handleChanges = event => {
    this.setState({ taskName: event.target.value });
  };

  handleSubmit = event => {
    this.props.addTodo(event, this.state.taskName);
    this.setState({ taskName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;
