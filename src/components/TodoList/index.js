

import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h1>{todo}  <button onClick={() => deleteHandler(index)}>Delete</button>
                </h1>
            </div>)}
        </div>
    )
}

export default TodoList

//single Todo

/*const TodoList = ({todolist}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h1>{todo} 
                </h1>
            </div>)}
        </div>
    )
}

export default TodoList*/