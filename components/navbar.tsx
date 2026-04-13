"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  const customNavStyle = "px-3 md:px-5 py-2 rounded-md font-serif text-lg md:text-xl font-bold text-slate-700 hover:text-slate-900 hover:bg-white/50 transition-all cursor-pointer";

  return (
    <div className="absolute top-0 left-0 w-full flex flex-col items-center py-8 bg-transparent z-50">
      
      {/* THE NAME - Positioned above the links */}
      <h1 className="text-3xl font-bold font-serif">Le Ngoc Quynh Nhu</h1>
        

      {/* THE NAV LINKS */}
      <NavigationMenu>
        <NavigationMenuList className="space-x-1 md:space-x-2">
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link href="/publication_and_talks">Publications & Talks</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={customNavStyle}>
              <Link
                href="https://english-vietnamese-corpus.vercel.app/corpus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corpus
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}