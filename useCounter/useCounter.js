import { useState } from "react"



export const useCounter = (initialValue = 1) => {

    // const initialValue = 0;

    const [counter, setcounter] = useState(initialValue);

    const handleAdd = (value = 1) => {
        //Funcion con argumento
        // counter < 10 ? setcounter(counter + value) : console.log('can not add more')
        setcounter(counter + value)
    }

    const handleSubtract = () => {
        counter > 0 ? setcounter(counter -1) : console.log('can not subtract more')
    }
    
    const handleReset = () => {
        setcounter(initialValue);
    }

    return {
        counter,
        handleAdd,
        handleSubtract,
        handleReset,
        setcounter,
    }
}