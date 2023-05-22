import React from 'react'
import Home from './screens/Home/Home'
import './App.css'

import { AppProvider } from './store'

const App = () => {
    return (
        <AppProvider>
            <Home />
        </AppProvider>
    )
}

export default App
