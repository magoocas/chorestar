import Link from 'next/link'
import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Admin - Chorestar',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="p-4 border-b mb-4">
          <Link href="/">Home</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
