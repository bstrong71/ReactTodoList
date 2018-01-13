import React, { Component } from 'react';

export default class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }

  // createTasks method returns list item with key and text
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    // declare variable listItems that will contain array of li elements
    // map function loops over contents of array and returns array
    var listItems = todoEntries.map(this.createTasks);

    return(
      <ul className='theList'>
        {listItems}
      </ul>
    )
  }
}
