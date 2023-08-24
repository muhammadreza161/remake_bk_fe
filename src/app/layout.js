import './globals.css'
import { Flamenco } from 'next/font/google'

const flamenco = Flamenco({ subsets: ['latin'], weight: ["400"]})

export const metadata = {
  title: 'Burger King',
  description: 'Burger King Website by Muhammad Reza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={flamenco.className}>{children}</body>
    </html>
  )
}
