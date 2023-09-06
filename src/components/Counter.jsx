"use client"
import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const interruptorCounter = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        <section>
            <h1>Contador</h1>
            <p>Valor del contador: {counter}</p>
            <button onClick={interruptorCounter} className="border">Incrementar</button>
        </section>
    )
}