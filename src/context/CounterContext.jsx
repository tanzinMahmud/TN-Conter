import { createContext, useReducer, useState } from 'react'

// initial state
const initialState = {
    counter: 0,
}

// create context
const CounterContext = createContext()

// reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : 0,
            }
        case 'RESET':
            return {
                ...state,
                counter: 0,
            }
        default:
            return state
    }
}

// provider
const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterProvider }
