import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers";
import {
  circularWeb,
  general,
  generalSans,
  robert,
  zentry,
} from "@/utils/fonts";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${generalSans.variable} ${zentry.variable} ${robert.variable} ${circularWeb.variable} ${general.variable} font-general-sans overflow-x-hidden antialiased`}
      >
        <Providers>
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
