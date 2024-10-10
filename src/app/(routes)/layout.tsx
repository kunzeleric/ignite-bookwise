import { Sidebar } from '@/components/Sidebar/sidebar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800 antialiased">
        <div className="flex p-5">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
