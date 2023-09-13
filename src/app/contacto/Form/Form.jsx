"use client"
import { useRef } from "react"

export default function Form() {
    const inputNameRef = useRef()
    const inputEmailRef = useRef()
    const inputMSGRef = useRef()

    const enviarButton = () => {
        const name = inputNameRef.current.value
        const email = inputEmailRef.current.value
        const message = inputMSGRef.current.value

        if (name && email && message) {
            alert(`Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`)
            console.log(name, email, message)
        } else {
            alert("Por favor, complete todos los campos.")
        }
    }

    return (
        <section>
            <input ref={inputNameRef} type="text" placeholder="Nombre" className="border" />
            <input ref={inputEmailRef} type="email" placeholder="Correo Electronico" className="border" />
            <input ref={inputMSGRef} type="text" placeholder="Mensaje" className="border" />
            <button onClick={enviarButton}>Enviar</button>
        </section>
    )
}