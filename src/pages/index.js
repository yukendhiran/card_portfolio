import Image from 'next/image'

import { Inter } from 'next/font/google'
import App from './_app'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> <App />  </div>

  )
}
