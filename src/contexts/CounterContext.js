import { createContext, useReducer } from "react";

export const CounterContext = createContext()

export function CounterContextProvider({children}) {
    const initialState = {
        counterValue: 0
    }

    const reducer = (state, action) => {
        const error = new Error('No such action called', action)
        const returnObj = {
            increment: { counterValue: state.counterValue + 1},
            decrement: { counterValue: state.counterValue - 1}
        }

        return returnObj[action] ? returnObj[action]: error
    }

    const [counterState, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{
            counterState, dispatch
        }}>
            {children}
        </CounterContext.Provider>
    )
}