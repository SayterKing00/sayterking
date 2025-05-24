import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google"; // Kaldırıldı
import "./globals.css";
import FluidBackground from "@/components/FluidBackground";

/* // Kaldırıldı
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "SayterKing - Tanıtım Sitesi",
  description: "SayterKing YouTube kanalı tanıtım sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body /* className={`${geistSans.variable} ${geistMono.variable}`} // Kaldırıldı */ >
        <FluidBackground />
        {children}
      </body>
    </html>
  );
}
