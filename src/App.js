import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';


function App() {

  //let welcome = 'Welcome to My Blog';

  const today = new Date();
  const date = `${today.getMonth()+1} / ${today.getDate()} / ${today.getFullYear()}`;

  const [status, setStatus] = useState('Coding');

  const [todo, setTodo] = useState(['Morning Run', 'Weight Lifting', 'Work']);

  

  function Modal(){
    return (
      <div className="modal">
        <h3>my status: <span style={{color:"red"}}>{status}</span></h3>
        <button type="button" onClick={() => setStatus("Resting")}>Rest</button>
        <button type="button" onClick={() => setStatus("Coding")}>Code</button>
      </div>
    )
  }

  // making a component for todo list array for html rendeing
  function TodoList(){
    let list = [];
    for (let i =0 ; i <todo.length; i++){
      list.push(        
        <div className="list">
        <input type = "checkbox"></input>
        <button type="button" onClick={() => {
          let newTodo = [...todo];
          newTodo.splice(i, 1);
          setTodo(newTodo);}
        }>delete</button>
        <h3>{todo[i]} <button type="button" onClick={() => {
            let newTodo = [...todo];
            let newTask = prompt("Enter Your Task", todo[i]);
            newTodo[i] = newTask;
            setTodo(newTodo);}
        }>edit</button></h3>
        <hr/>
        </div>
      );
    }
    return list;
  }


  return (
    
    <div className="App">


      <div className="black-nav">
        <h1>Today's TO DO LIST</h1>
      </div>
      <h2>{date} </h2>
      <Modal></Modal>
      <TodoList></TodoList>
      <button type="button" onClick={() => {
            let newTodo = [...todo];
            let addTodo = 'new task';
            newTodo.push(addTodo);
            setTodo(newTodo);}
      }>add</button>
      
    </div>
  );
}

export default App;
