
import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer";

const initialState = [];

//init es una funcion que se ejecuta cuando se crea el componente
const init = () => {
return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {


    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    // console.log(todos)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = todo => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

    dispatch( action );
}

    const handleDeleteTodo = id => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }

        dispatch( action );
    }

    
    const handleToggleTodo = id => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch( action );
    }

    const pendingTodos = todos.filter(todo => !todo.done).length;

    const todosCount = todos.length;
    
  return {
    todosCount,
    pendingTodos,
    todos, 
    handleDeleteTodo, 
    handleToggleTodo, 
    handleNewTodo
  }
}
