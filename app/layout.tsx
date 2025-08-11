import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const grotesk = localFont({
  src: '../assets/fonts/CabinetGrotesk-Variable.ttf',
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  title: 'Remagica',
  description: 'Re-imagine your creativity',
  openGraph: {
    type: 'website',
    url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
    title: 'Remagica',
    description: 'Re-imagine your creativity',
    siteName: 'Remagica',
    images: [
      {
        url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/opengraph.png`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
