import React, { useContext } from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import './Home.css'

import { CounterContext } from '../../context/CounterContext'

const home = () => {
    const { state, dispatch } = useContext(CounterContext)

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return (
        <div className='container'>
            <Header title='Counter' />
            <div className='d-flex justify-content-between'>
                <Button title='-' action={decrement} />
                <h1>{state.counter}</h1>
                <Button title='+' action={increment} />
            </div>
            <div className='text-center'>
                <Button title='Reset' action={reset} />
            </div>
        </div>
    )
}

export default home
