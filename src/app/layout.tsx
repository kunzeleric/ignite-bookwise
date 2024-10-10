import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ignite Bookwise',
  description:
    'Search your favorite books, read reviews and track your reading progress!',
}

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
