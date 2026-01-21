
import React,{useState} from 'react'
import TodoList from './components/TodoList';
import './App.css'
const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
 
  }
  const submitHandler = e =>{
    e.preventDefault();
   
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
         <div>
            <h1 className='h1'>Todo Management Application</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} 
              onChange={changeHandler} /> 
              <button type="submit" value="Add" name="Add">Add</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
  
  )
}

export default App