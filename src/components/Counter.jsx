"use client"
import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const interruptorCounter = () => {
        setCounter(counter + 1)
        console.log(counter)
    }
    return (
        <section className="h-screen w-screen bg-black flex flex-col justify-center items-center">
            <p className="text-7xl text-red-700">Valor del contador: {counter}</p>
            <button className="bg-red-700 text-amber-500 p-2 rounded-2xl" onClick={interruptorCounter}>Incrementar</button>
        </section>
    )
}