import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hour House Bistro | East London',
  description: 'Good food, good hours, good company. Visite o Hour House Bistro em Salmon Lane, London.',
  metadataBase: new URL('https://hour-house-bistro.barberss.chatgpt.site'),
  openGraph: {
    title: 'Hour House Bistro | East London',
    description: 'Pratos generosos, café bem tirado e uma mesa sempre pronta para você.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hour House Bistro | East London',
    description: 'Good food. Good hours. Good company.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
