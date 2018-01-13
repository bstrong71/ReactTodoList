import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    // state includes items array to store various items
    this.state = {
      items: [];
    };

    this.addItem = this.addItem.bind(this);
  }

  // addItem event handler
  addItem(e) {

  }

  render() {
    return(
      <div className='todoListMain'>
        <div className='header'>
          {/* listen for the submit event on the form and call the addItem method.
             Used onSubmit because button type is set to submit */}
          <form onSubmit={this.addItem}>
            <input placeholder='enter task'></input>
            <button type='submit'>add</button>
          </form>
        </div>
      </div>
    )
  }
}
