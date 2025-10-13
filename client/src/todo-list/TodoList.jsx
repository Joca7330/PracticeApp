import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    console.log(todos);
    const [inputVal, setInputVal] = useState("");

    // Stores user input in inputVal
    const writeTodo = (e) => {
        setInputVal(e.target.value)
        console.log(inputVal);
    }
    // Adds user input to todo list
    const addTodo = () => {
        setTodos((prevTodos) => [...prevTodos, inputVal])
        console.log('added')
    }

    return (
        <main className='main-container bg-gray-200 h-screen'>
            {/* <h1 className='text-3xl text-center'>Todo List Vanilla</h1> */}
            <h1 className='text-2xl text-center m-5'>Todo List Tailwind</h1>
            <div className='input-container flex justify-center '>
                <input className='input bg-white'
                    type="text"
                    placeholder='Enter todo'
                    onChange={writeTodo}
                />
                <button className='button-container bg-blue-500 text-white rounded' onClick={addTodo}>+</button>
            </div>

            <div className='todo-card'>
                <div className='container'>
                    {todos.map((todo, index) => {
                        return (
                            <div className='todo'>
                                {todo}
                                {/* <div className='actions'> */}
                                <input type="checkbox" />
                                <button>Delete</button>
                                {/* </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default TodoList