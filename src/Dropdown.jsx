import React, { Component } from "react";
import "./App.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
    this.state = {
      isLoaded: false,
      items: [],
      isInputClicked: false,
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

  handleHover = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    //insert the element list into the dropdown
    console.log(this.dropdownRef.current);
    // let renderList;
    

      // document.getElementById('myDD').appendChild(this.childList);
      //.appendChild(this.childList);
      //unhide the dropdown
    
    

    // if(this.dropdownRef.current){
    //   renderList.forEach(element => {
    //     this.dropdownRef.current.appendChild(element);
    //   });
    // }
        // this.dropdownRef.current.appendChild(<h1>Here</h1>);
    this.setState({isInputClicked : true});

  };
  render() {
    // console.log("result", this.state.items);
    // this.childList = this.state.items.map((obj) => {
    //   // Create anchor element.
    //   var a = document.createElement("a");

    //   // Create the text node for anchor element.
    //   var link = document.createTextNode(obj.title);

    //   // Append the text node to anchor element.
    //   a.appendChild(link);

    //   // Set the title.
    //   a.title = obj.title;

    //   // Set the href property.
    //   a.href = `https://www.geeksforgeeks.org/${obj.title}`;

    //   // Append the anchor element to the body.

    //   return a;
    // });

     let renderList =  this.state.items.map((d,index) => <li key={index}>{d.textContent}</li>);
  
    //  if(renderList){
    //    this.setState({renderList })
    //  }

     let temp = <h1>here</h1>;

    console.log(">>>>>", this.childList);

    // let itemList = [nodeElements]
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.handleHover}>
          Dropdown
        </button>
        <div id="myDD" ref={this.dropdownRef}>{this.state.childElement}
        { this.state.isInputClicked ? temp : null }
        </div>
      </div>
    );
  }
}

export default Dropdown;
