import type { Metadata } from "next";
import { Nunito, Press_Start_2P } from "next/font/google";
import "./globals.scss";
import Sidebar from "@/features/Sidebar/sidebar";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Recipe Lab",
  description: "A recipe app for the modern chef.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"className={`${pressStart.variable} ${nunito.variable}`}>
      <body>
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
