"use client"
import { useRef } from "react"

export default function Form() {
    const inputNameRef = useRef(null)
    const inputEmailRef = useRef(null)
    const inputMSGRef = useRef(null)

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
            <form onSubmit={(e) => {
                e.preventDefault()
                enviarButton()
            }}>
                <input 
                    ref={inputNameRef}
                    type="text"
                    placeholder="Nombre"
                    className="border border-black"
                />
                <input
                    ref={inputEmailRef}
                    type="email"
                    placeholder="Correo Electronico"
                    className="border border-black"
                />
                <input
                    ref={inputMSGRef}
                    type="text"
                    placeholder="Mensaje"
                    className="border border-black"
                />
                <input
                    type="submit"
                    value={"Enviar"}
                    className="border border-black"
                />
            </form>
        </section>
    )
}