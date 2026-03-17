import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AmazoNext | Stack moderna e comunidade open source',
  description: 'AmazoNext em Next.js + React com seção especial BR Connect e terminal interativo.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
