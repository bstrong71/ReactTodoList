import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    // state includes items array to store various items
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  // addItem event handler
  addItem(e) {
    // declare variable itemArray to store current value
    var itemArray = this.state.items;
    // check for input element content
    if (this._inputElement !== '') {
      // if content found, add it to start of itemArray along with a timestamp
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });
      // set state items property to itemArray
      this.setState({
        items: itemArray
      });
      // clear _inputElement to room for next item
      this._inputElement.value = '';
    }
    console.log('Item Array: ', itemArray);
    // Override event's default behavior. By default, when submitting a form,
    // the page reloads and clears everything out. Don't want that here!
    e.preventDefault();

  }

  render() {
    return(
      <div className='todoListMain'>
        <div className='header'>
          {/* listen for the submit event on the form and call the addItem method.
             Used onSubmit because button type is set to submit */}
          <form onSubmit={this.addItem}>
            {/* store reference to input element in _inputElement property */}
            <input ref={(a) => this._inputElement = a} placeholder='enter task'></input>
            <button type='submit'>add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    )
  }
}
