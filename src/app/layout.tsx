import './globals.css';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joel Feven',
  description: 'Graduate Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='flex flex-col items-center h-full grow w-full p-2'>
          {children}
        </main>
        </body>
    </html>
  )
}
