import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown'
import TodoApp from './ToDoList'

function Button(props){
  return(
    <button {...props}>{props.children}</button>
  )
}

const data =['list1','list2','list3'];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={counter: 0}
  }
  render(){  return (
    <div>
  <Button aria-label="decrement" onClick={()=>{this.setState({counter: this.state.counter-1})}}>-</Button>
  <span aria-live="assertive" aria-atomic="true" tabIndex="1">This will show text: {this.state.counter}</span>
  <Button aria-label="increment" onClick={()=>{this.setState({counter: this.state.counter+1})}}>+</Button>

  <br></br>
  <br></br>

<TodoApp />
    </div>
  );
}
}


export default App;
