import { ReactNode } from "react";
import { siteConfig } from "@/site";
import Link from "next/link";

/*
This header component is meant to abstract the general site header from whatever logic (auth, CMS, etc) that might go within it. 
This way the header can be composed within the layout is implemented in
*/

type SiteHeaderProps = {
    className?: string;
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
};

export function SiteHeader({
    className,
    left,
    center,
    right,
}: SiteHeaderProps) {
    return (
        <header className={`${className} bg-san-marino-200 w-full border-b`}>
            <div className="flex h-14 items-center justify-between">
                <div className="flex items-center gap-4">
                    {left ?? <DefaultLogo />}
                </div>

                <nav className="hidden gap-6 md:flex">{center}</nav>

                <div className="flex items-center gap-2">{right}</div>
            </div>
        </header>
    );
}

function DefaultLogo() {
    return (
        <Link href="/" className="text-xl font-light">
            {siteConfig.title}
        </Link>
    );
}
