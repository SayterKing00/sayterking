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
      <body>
        <FluidBackground />
        {children}
      </body>
    </html>
  );
}
