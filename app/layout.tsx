import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { oscine } from './fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atend Já - Ortopedista em Feira de Santana',
  description: 'Consultas com ortopedistas experientes, exames de imagem e tratamentos para coluna, joelhos e ombros – sem plano de saúde e sem filas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${oscine.variable} font-sans`}>{children}</body>
    </html>
  )
}
