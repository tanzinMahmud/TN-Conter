import React, { useState, useEffect } from 'react'
import Button from './components/button/button'
import Header from './components/header/header'

const App = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter((prevState) => prevState + 1)
    }

    const decrement = () => {
        setCounter((prevState) => prevState - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <div className='container'>
                <Header title='Counter' />
                <div className='d-flex justify-content-between'>
                    <Button title='-' action={decrement} />
                    <h1>{counter}</h1>
                    <Button title='+' action={increment} />
                </div>
                <div className='text-center'>
                    <Button title='Reset' action={reset} />
                </div>
            </div>
        </>
    )
}

export default App
