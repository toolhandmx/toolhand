import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
/* cspell:disable-next-line */
import "remixicon/fonts/remixicon.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolHand: Tecnología y creatividad al servicio de tu día a día",
    template: "%s - ToolHand",
  },
  description:
    "Especialistas en soluciones integrales para la reparación de celulares, creación de páginas web e implementación de puntos de venta.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "ToolHand: Tecnología y creatividad al servicio de tu día a día",
    description:
      "Especialistas en soluciones integrales para la reparación de celulares, creación de páginas web e implementación de puntos de venta.",
    url: "https://toolhand.vercel.app",
    locale: "es_MX",
    images: [
      {
        url: "https://toolhand.vercel.app/preview.png",
        width: 800,
        height: 600,
        alt: "ToolHand's Website Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolHand: Tecnología y creatividad al servicio de tu día a día",
    description:
      "Especialistas en soluciones integrales para la reparación de celulares, creación de páginas web e implementación de puntos de venta.",
    images: ["https://toolhand.vercel.app/preview.png"],
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
