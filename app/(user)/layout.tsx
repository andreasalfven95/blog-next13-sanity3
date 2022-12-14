import Header from '../../components/Header'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='se'>
      <body>
        <Header />
        {/* Banner */}
        {children}
      </body>
    </html>
  )
}
