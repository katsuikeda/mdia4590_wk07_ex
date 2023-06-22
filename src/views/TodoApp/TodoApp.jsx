import React, { Component } from "react";

import TodoList from "../../components/Todo/List";

// if you import css and image files compilation will make up missing files
import './TodoApp.css';
 
class TodoApp extends Component {

  render() {
    return (
      <div>
        <h1>Todo App</h1>

        <hr />        

        <TodoList />
      </div>
      
    );
  }  
}

export default TodoApp;