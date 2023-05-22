import { createContext, useReducer } from 'react'
import { counterReducer } from './reducers/counterReducer'

// initial state
const initialState = {
    counter: 0
}

// reducer
const rootReducer = (state, action) => {
    return {
        counter: counterReducer(state.counter, action)
    }
}

// create context
const AppContext = createContext()

// provider
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
