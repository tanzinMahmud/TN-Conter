import React, { useContext } from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import './Home.css'

import CounterContext from '../../context/CounterContext'

const home = () => {
    const { increment, decrement, reset, counter } = useContext(CounterContext)

    return (
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
    )
}

export default home
