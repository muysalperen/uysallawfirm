import '../styles/global.css'

export const metadata = { title: 'Uysal Hukuk', description: '' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
