import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height: "100%"}}>
      <body className={inter.variable} style={{height: "100%"}}>{children}</body>
    </html>
  )
}
