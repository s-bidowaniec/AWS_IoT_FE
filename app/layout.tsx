'use client';
import './globals.css'
import { AppProvider } from '../components/Context/store'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
   children ,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><AppProvider>{children}</AppProvider></body>
    </html>
  )
}

