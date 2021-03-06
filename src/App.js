import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form"
import TodoList from "./components/TodoList"


function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div>
    <header>
      <h1>TO DO LIST</h1>   
    </header>
      <Form setTodos={setTodos}  setInputText={setInputText} todos={todos} inputText={inputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
	);
}


export default App;
