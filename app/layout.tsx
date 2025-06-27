import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Lodestar Forge - Official Docs",
    metadataBase: new URL("https://docs.lodestar-forge.com/"),
    description:
        "Easy to use, open-source infrastructure management platform, crafted specifically for red team engagements.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
            </head>
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} font-regular antialiased tracking-wide`}
                suppressHydrationWarning
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
