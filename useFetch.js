import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    })

    const {data, isLoading, hasError} = state;

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })
        
        const answer = await fetch(url);
        const data = await answer.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])
    


    return{
        data: data,
        isLoading: isLoading,
        hasError: hasError,
    }
}
