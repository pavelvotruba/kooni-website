// C:\kooni\kooni-website\app\layout.tsx
// Purpose: Root layout and metadata for the public Kooni Time Tracking website.
// Change: Retains the existing Geist/root-layout structure and replaces generic starter metadata.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kooni Time Tracking | Your work structure, not ours.",
  description:
    "Flexible employee time tracking, operational dimensions, configurable rules and rates, controlled approval, and flexible downstream outputs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
