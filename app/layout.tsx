import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/global/Container'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJs Store',
  description: 'An amazing online store built with NextJs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Container className='py-20'>{children}</Container>
      </body>
    </html>
  )
}
