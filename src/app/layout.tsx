import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppinsSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "EXLOG",
  description: "Exportaciones y Logisticas EXLOG S.A",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.className} antialiased`}>{children}</body>
    </html>
  )
}
