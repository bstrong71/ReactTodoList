import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    // state includes items array to store various items
    this.state = {
      items: []
    };
  }

  // addItem event handler with arrow function that binds the function to
  // this in the component
  addItem = (e) => {
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
    // Override event's default behavior. By default, when submitting a form,
    // the page reloads and clears everything out. Don't want that here!
    e.preventDefault();

  }

  // deleteItem function with arrow function that binds the function to
  // this in the component
  // Passing in key from the clicked item
  deleteItem = (key) => {
    // Check key against all stored items via filter method
    // Create new array called filteredItems that contains everything except
    // item that is being removed
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    // The filtered array is set as new items property in the state object
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return(
      <div className='todoListMain'>
        <div className='header'>
          {/* Listen for the submit event on the form and call the addItem method.
             Used onSubmit because button type is set to submit */}
          <form onSubmit={this.addItem}>
            {/* Store reference to input element in _inputElement property */}
            <input ref={(a) => this._inputElement = a} placeholder='enter task'></input>
            <button type='submit'>add</button>
          </form>
        </div>
        {/* Specify prop called delete and set it to value of function called
            deleteItem. Ensures that TodoItems component knows about a prop
            called delete and that delete function added to TodoList connects */}
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}
