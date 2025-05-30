import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import { MainHeader } from "@/features/shared/ui/MainHeader";
import { MainFooter } from "@/features/shared/ui/MainFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VostokFramework: asset loading for AS3 apps",
  description:
    "VostokFramework is a powerful AS3 framework for loading, management and storage of assets (XML, SWF, JPG, etc). It has several advanced features such as built-in localization, simultaneous loading queues, detailed loading monitoring, priority, cache control, etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`flex flex-col h-full ${geistSans.variable} ${geistMono.variable} font-geist-sans antialiased`}
      >
        <div className="flex flex-col flex-1 w-full bg-primary-bg">
          <MainHeader />
          <div className="flex flex-row justify-center mb-28">
            <div className="flex flex-col box-border w-full px-4 md:px-8 lg:w-5xl">
              <main>
                <article className="grid gap-y-6">{children}</article>
              </main>
            </div>
          </div>
        </div>
        <MainFooter />
      </body>
      <GoogleAnalytics gaId="UA-36881511-5" />
    </html>
  );
}
