import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notesist",
  description: "your Noting app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme : light)",
        url: "/logo.svg",
        href: " /logo.svg",
      },
      {
        media: "(prefers-color-scheme : dark)",
        url: "/logo.svg",
        href: " /logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
