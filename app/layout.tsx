import type { Metadata } from "next";
import { siteConfig } from "@/site";
import { geistSans, geistMono } from "@/styles/fonts";
import "@/app/globals.css"

/*
This layout is responsible for only the top level styles, metadata and html/body. Keep it simple
*/

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`min-h-screen bg-background text-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
