
import React,{useState} from 'react'
import TodoList from './components/TodoList';

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
      <center>
        <div>
          <div>
            <h5>Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> 
              <button type="submit" value="Add" name="Add">Add</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App