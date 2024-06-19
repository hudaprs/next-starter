import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>): React.ReactNode => {
	return (
		<html lang='en'>
			<body className={cn('min-h-screen font-sans', inter.variable)}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
