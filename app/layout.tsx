import type { Metadata } from "next";
import {
  Instrument_Serif,
  IBM_Plex_Mono,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import VisitorTracker from "@/components/VisitorTracker";

const instrumentSerifHeading = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["500", "600", "700"],
});

const siteConfig = {
  name: "Jayanth Thalla",
  title: "Jayanth Thalla — Portfolio",
  description:
    "A Full-Stack AI Engineer building LLM-powered products and production SaaS applications with FastAPI, React, RAG pipelines, and multi-agent systems.",
  url: "https://thallajayanth.vercel.app",
  image: "/og-hero.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Jayanth Thalla",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Jayanth Thalla",
    "Full-Stack AI Engineer",
    "Software Engineer",
    "FastAPI Developer",
    "React Developer",
    "RAG Pipelines",
    "Multi-Agent Systems",
    "Machine Learning",
    "Portfolio",
    "Projects",
    "Technical Blogs",
  ],

  authors: [{ name: "Jayanth Thalla" }],
  creator: "Jayanth Thalla",
  publisher: "Jayanth Thalla",

  category: "Technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Jayanth Thalla",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Jayanth Thalla Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
    creator: "@jayanththalla",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        instrumentSerifHeading.variable,
        IBMPlexMono.variable,
        dancingScript.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col items-center overflow-x-clip">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VisitorTracker />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
