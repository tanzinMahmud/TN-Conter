import React, { useContext } from 'react'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import './Home.css'

import { AppContext } from '../../store'

import { increment, decrement, reset } from '../../actions/counterActions'

const home = () => {
    const {
        state: { counter },
        dispatch
    } = useContext(AppContext)

    const incre = () => {
        increment(dispatch)
    }

    const decre = () => {
        decrement(dispatch)
    }

    const res = () => {
        reset(dispatch)
    }

    return (
        <div className='container'>
            <Header title='Counter' />
            <div className='d-flex justify-content-between'>
                <Button title='-' action={decre} />
                <h1>{counter}</h1>
                <Button title='+' action={incre} />
            </div>
            <div className='text-center'>
                <Button title='Reset' action={res} />
            </div>
        </div>
    )
}

export default home
