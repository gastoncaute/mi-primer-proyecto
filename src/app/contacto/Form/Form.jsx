"use client"
import { useRef } from "react"

export default function Form() {
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMSJRef = useRef()
    return (
        <section>
            <input ref={inputNameRef} type="text" placeholder="Nombre" className="border" />
            <input ref={inputEmailRef} type="email" placeholder="Correo Electronico" className="border" />
            <input ref={inputMSJRef} type="text" placeholder="Mensaje" className="border" />
            <button onClick={() => console.log(inputNameRef.current.value, inputEmailRef.current.value, inputMSJRef.current.value)}>Enviar</button>
        </section>
    )
}