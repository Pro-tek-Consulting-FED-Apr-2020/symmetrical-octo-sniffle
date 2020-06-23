import React from "react";



console.clear();

const Title = ({ todoCount }) => {
  return (
    <div>
      <div>
        <h1>to-do ({todoCount})</h1>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = "";
      }}
    >
      <input
        className="form-control col-md-12"
        ref={(node) => {
          input = node;
        }}
      />
      <br />
    </form>
  );
};

const Todo = ({ todo, remove }) => {
  // Each Todo
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <li
      className="list-group-item"
      onClick={() => {
        remove(todo.id);
      }}
    >
      {todo.text}
    </li>
  );
};

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  console.log(">>>",todoNode);
  return (
    <ul className="list-group" style={{ marginTop: "30px" }}>
      {todoNode}
    </ul>
  );
};

// Contaner Component
// Todo Id
window.id = 0;
class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
    };
  }

  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { id: window.id,text: val };
    // Update data
      let apiResponseArr = [...this.state.data];
      apiResponseArr.push(todo);
      window.id++;
      this.setState({ data: apiResponseArr });
    
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
      else {
        return null;
      }
    });
    // Update state with filter

    this.setState({ data: remainder });
  }

  render() {
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.data.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
