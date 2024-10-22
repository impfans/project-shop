import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppSidebar from "@/components/appSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "程序开发 定制 网站建设",
  description: "欢迎来挑选适合你的App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppSidebar />
        <main className=" py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
