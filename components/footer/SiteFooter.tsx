import { ReactNode } from "react";
import { siteConfig } from "@/site";
import Link from "next/link";

/*
This footer component is meant to abstract the general site footer from whatever logic (auth, CMS, etc) that might go within it. 
This way the footer can be composed within the layout is implemented in
*/

type SiteFooterProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};

export function SiteFooter({ left, center, right }: SiteFooterProps) {
    return (
        <header className="bg-san-marino-300 border-t">
            <div className="flex h-50 items-center justify-between">
                <div className="flex items-center justify-end gap-4">
                    {left ?? (
                        <p className="font-light">Designed by Jaxon McNeil</p>
                    )}
                </div>
                <nav className="hidden gap-6 md:flex">{center}</nav>
                <div className="flex items-center gap-2">{right}</div>
            </div>
        </header>
    );
}
