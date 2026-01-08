import { SiteFooter } from "@/components/footer/SiteFooter";
import { SiteHeader } from "@/components/header/SiteHeader";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SiteHeader className="sticky top-0 bg-white px-5" />
            {children}
            <SiteFooter className="bg-white px-5" />
        </>
    );
}
