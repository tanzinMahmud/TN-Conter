import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstants'

const increment = (dispatch) => {
    dispatch({ type: INCREMENT })
}

const decrement = (dispatch) => {
    dispatch({ type: DECREMENT })
}

const reset = (dispatch) => {
    dispatch({ type: RESET })
}

export { increment, decrement, reset }
