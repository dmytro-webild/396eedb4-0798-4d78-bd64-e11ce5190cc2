import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'FocusFlow: Organize, Discipline, Concentrate',
  description: 'FocusFlow helps you master productivity, track habits, and achieve mental clarity with smart tools and a motivating design. Start your journey to a more focused and disciplined life.',
  keywords: ["FocusFlow, productivity app, task planner, habit tracker, Pomodoro timer, goal tracking, concentration, discipline, self-improvement, mental organization, focus, daily planner, smart to-do list, motivation quotes, personal growth, progress dashboard, AI productivity assistant"],
  openGraph: {
    "title": "FocusFlow: Organize, Discipline, Concentrate",
    "description": "FocusFlow helps you master productivity, track habits, and achieve mental clarity with smart tools and a motivating design. Start your journey to a more focused and disciplined life.",
    "url": "https://focusflow.com",
    "siteName": "FocusFlow",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/market-trends-concept-with-computer_23-2150372439.jpg",
        "alt": "FocusFlow dashboard interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "FocusFlow: Organize, Discipline, Concentrate",
    "description": "FocusFlow helps you master productivity, track habits, and achieve mental clarity with smart tools and a motivating design. Start your journey to a more focused and disciplined life.",
    "images": [
      "http://img.b2bpic.net/free-photo/market-trends-concept-with-computer_23-2150372439.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
