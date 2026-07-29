import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Servi Hogar Pro | Servicio integral del hogar",
  description:
    "Refacciones, pintura, mantenimiento, sellado contra humedad y colocación de cerámicas, mármol y porcelanato. Presupuesto sin cargo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="wall-texture">{children}</body>
    </html>
  )
}
