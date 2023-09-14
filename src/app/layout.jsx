import './globals.css'

export const metadata = {
  title: 'Mi Primer Proyecto',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <h1>Trabajo practico N1</h1>
        {children}
      </body>
    </html>
  )
}