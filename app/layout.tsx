import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { geistSans, geistMono } from "@/styles/fonts";
import "@/app/globals.css";

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
                className={`bg-background text-foreground min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
