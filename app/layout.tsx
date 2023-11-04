'use client';
import './globals.css'
import { AppProvider } from '../components/Context/store'
import { Inter } from 'next/font/google'
import { Authenticator } from '@aws-amplify/ui-react';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsmobile from '../app/aws-exports';
Amplify.configure(awsmobile);

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
   children ,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Authenticator><AppProvider>{children}</AppProvider></Authenticator></body>
    </html>
  )
}

