import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './globals.css'

// see https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
