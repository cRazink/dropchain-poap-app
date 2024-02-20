import "@/devlink/global.css";
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { DevLinkProvider } from "@/devlink/DevLinkProvider";


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>{children}</div>
  )
}