import React from 'react'
import Home from './screens/Home/Home'

import { CounterProvider } from './context/CounterContext'

const App = () => {
    return (
        <CounterProvider>
            <Home />
        </CounterProvider>
    )
}

export default App
