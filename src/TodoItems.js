import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

export default class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

  }
  // define function called delete that takes key as argument
  // Doesn't delete, but calls another delete function passed
  delete(key) {
    this.props.delete(key);
  }

  // createTasks method returns list item with key and text
  // Uses arrow function that binds the function to this in the component
  createTasks = (item) => {
    // Listen for click event and associate it with event handler called delete.
    // Using arrow function allows us to maintain both the default event argument
    // while allowing us to pass in our own arguments as well (this is a JS quirk,
    // not anything to do with React).
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    // declare variable listItems that will contain array of li elements
    // map function loops over contents of array and returns array
    var listItems = todoEntries.map(this.createTasks);

    return(
      <ul className='theList'>
        <FlipMove duration={250} easing='ease-out'>
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}
