import type { Metadata } from 'next'
import './globals.css'
import { Geist_Mono, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

const metadata = {
  title: 'ChatMe',
  description: 'A simple chat application built with Next.js and typscript',
}


type RootLayoutProps = {
  children: React.ReactNode
}



function layout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <body className="min-h-full flex flex-col items-center ${inter.className} ${geistMono.className}">
        

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>


      </body>

    </html>
  )
}

export default layout