import { createContext, useState } from 'react'

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCounter((prevState) => (prevState > 0 ? prevState - 1 : 0))
    }

    const reset = () => {
        setCounter(0)
    }
    return (
        <CounterContext.Provider
            value={{ increment, decrement, reset, counter }}
        >
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext
