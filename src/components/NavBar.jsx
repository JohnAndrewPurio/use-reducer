import { CounterContext } from "../contexts/CounterContext"
import { useContext } from 'react'

export default function NavBar() {
    const { counterState } = useContext(CounterContext)
    const { counterValue } = counterState

    return (
        <div className="nav-bar">
            <h2>NavBar</h2>
            <h2>{counterValue}</h2>
        </div>
    )
}