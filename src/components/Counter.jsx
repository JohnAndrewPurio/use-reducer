import { CounterContext } from "../contexts/CounterContext"
import { useContext } from 'react'

export default function Counter() {
    const { counterState, dispatch } = useContext(CounterContext)
    const { counterValue } = counterState

    return (
        <div className="counter">
            <button onClick={() => dispatch('increment')}>+</button>
            <h3>{counterValue}</h3>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button className="reset" onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
