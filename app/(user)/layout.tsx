import Banner from '../../components/Banner'
import Header from '../../components/Header'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='se'>
      <body className='container antialiased mx-auto'>
        <Header />
        <Banner />
        <main className='prose max-w-none'>{children}</main>
      </body>
    </html>
  )
}
