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
    <div>
    
      <input
        className="form-control col-md-12"
        ref={(node) => {
          input = node;
        }}
      />
      <br />
     <button  onClick={(e) => {
        e.preventDefault();
        let input= document.getElementsByClassName("form-control")[0];
        addTodo(input.value);
        input.value = "";
      }} data-testid={'submitBtn'}>Submit</button>
    </div>
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
      data-testid={window.id}
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
