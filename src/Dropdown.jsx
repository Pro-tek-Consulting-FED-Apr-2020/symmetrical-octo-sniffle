import React, { Component } from "react";
import "./App.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  childList=[];

  handleHover = e => {
    console.log(e);
    //insert the element list into the dropdown
console.log(this.dropdownRef.current);
document.getElementById('myDD').appendChild(this.childList);
//.appendChild(this.childList);
    //unhide the dropdown
  };
  render() {
    console.log("result",this.state.items);
    this.childList = this.state.items.map((obj) => {
      // Create anchor element.
      var a = document.createElement("a");

      // Create the text node for anchor element.
      var link = document.createTextNode(obj.title);

      // Append the text node to anchor element.
      a.appendChild(link);

      // Set the title.
      a.title = obj.title;

      // Set the href property.
      a.href = `https://www.geeksforgeeks.org/${obj.title}`;

      // Append the anchor element to the body.
      return a;
    });

    console.log(">>>>>",this.childList);

    // let itemList = [nodeElements]
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.handleHover}>
          Dropdown
        </button>
        <div id="myDD" ref={this.dropdownRef}></div>
      </div>
    );
  }
}

export default Dropdown;
