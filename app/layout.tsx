import '../styles/global.css'

export const metadata = {
  title: 'Uysal Hukuk',
  description: 'Modern hukuk çözümleri',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  )
}
