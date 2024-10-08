import type { PropsWithChildren } from 'react'

import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { cn } from '@/libs/utils.lib'

import type { Metadata } from 'next'

import './globals.css'
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface RootLayoutProps extends PropsWithChildren {
  params: { locale: string }
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={params.locale}>
      <body className={cn('min-h-screen font-sans', inter.variable)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
