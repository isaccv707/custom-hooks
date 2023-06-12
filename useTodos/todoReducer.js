

export const todoReducer = ( initialState = [], action) => {
    
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Delete Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo, //La negacion de abajo es por que queremos que todo.done sea true y no false
                        done: !todo.done
                    }
                }
                return todo;
            });

            //Give me a case to edit the all todos
        case '[TODO] Edit Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo, //La negacion de abajo es por que queremos que todo.done sea true y no false
                        desc: action.payload.desc
                    }
                }
                return todo;
            });
    
        default:
            return initialState;
    }
}