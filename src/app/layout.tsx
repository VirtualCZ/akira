import type { Metadata } from "next";
import { Ranga, Sedgwick_Ave_Display } from "next/font/google";
import "./globals.css";
import ScrollingAkiraText from "./ScrollingAkiraText";
import Link from "next/link";
import ActiveLink from "./components/ActiveLink";
import Image from "next/image";

const ranga = Ranga({
  weight: ["400", "700"],
  variable: "--font-ranga",
  subsets: ["latin"],
});

const sedwick = Sedgwick_Ave_Display({
  weight: "400",
  variable: "--font-sedgwick",
  subsets: ["latin"],
});

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
      <head>
      </head>
      <body
        className={`${sedwick.variable} ${ranga.variable} antialiased`}
        style={{ background: "#1c1c1c" }}
      >
        {/* Full-width navbar stripe */}
        <nav
          className="w-full border-b border-black/[.08] dark:border-white/[.145] bg-white h-[200px] p-2"
        >
          {/* Centered navbar content container */}
          <div className="2xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto px-4 h-full flex items-center justify-between">
            <ActiveLink
              href="/"
              className="flex items-center justify-center font-bold"
              style={{
                fontSize: "24px",
                fontFamily: "Ranga, cursive",
                height: "100%"
              }}
            >
              HOME
            </ActiveLink>
            <ActiveLink
              href="/links"
              className="flex items-center justify-center font-bold"
              style={{
                fontSize: "24px",
                fontFamily: "Ranga, cursive",
                height: "100%"
              }}
            >
              LINKS
            </ActiveLink>
            <Link
              href="/"
              className="flex items-center justify-center"
              style={{
                height: "100%",
                padding: 0
              }}
            >
              <Image
                src="/akira.webp"
                alt="akira"
                width={160}
                height={160}
                style={{ margin: "0 auto", height: "100%", width: "auto" }}
                className="h-[100%]"
                priority
                draggable={false}
              />
            </Link>
            <ActiveLink
              href="/gallery"
              className="flex items-center justify-center font-bold"
              style={{
                fontSize: "24px",
                fontFamily: "Ranga, cursive",
                height: "100%"
              }}
            >
              GALLERY
            </ActiveLink>
            <ActiveLink
              href="/abcdkockapredePlaceholder"
              className="flex items-center justify-center font-bold"
              style={{
                fontSize: "24px",
                fontFamily: "Ranga, cursive",
                height: "100%"
              }}
            >
              LANGUAGES
            </ActiveLink>
          </div>
        </nav>
        {/* Scrolling background text with akira.webp image */}
        {/* Scrolling text - now a component */}
        <ScrollingAkiraText />
        {/* Page content container */}
        <div
          className="2xl:max-w-7xl lg:max-w-5xl md:max-w-2xl mx-auto relative"
          style={{
            padding: "80px 24px",
            height: "calc(100vh - 200px)",
            display: "flex",
          }}
        >
          <main
            className="flex flex-row"
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
