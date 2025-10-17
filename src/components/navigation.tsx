"use client";

import Link from "next/link";
import type { Route } from "next";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSessionStore } from "@/state/session";
import { cn } from "@/lib/utils";
import { useNavStore } from "@/state/nav";
import { Skeleton } from "@/components/ui/skeleton";
import { SITE_NAME } from "@/constants";

type NavItem = {
  name: string;
  href: Route;
};

interface Props {
  logoImg: string;
  logoText: string;
}
export function Navigation({
  logoImg = "/logo.png",
  logoText = "SimpleStone",
}: Props) {
  const { session, isLoading } = useSessionStore();
  const { isOpen, setIsOpen } = useNavStore();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "首页", href: "/" },
    { name: "快看水母", href: "/jellyfish" },
    ...(session
      ? ([
          { name: "Settings", href: "/settings" },
          { name: "Dashboard", href: "/dashboard" },
        ] as NavItem[])
      : []),
  ];

  const isActiveLink = (itemHref: string) => {
    if (itemHref === "/") {
      return pathname === "/";
    }
    return pathname === itemHref || pathname.startsWith(`${itemHref}/`);
  };

  const { theme } = useTheme();
  console.log("Current theme:", theme);
  // const logo = useMemo(() => {
  //   return theme === "dark" ? `${logoImg}-dark.png` : `${logoImg}.png`;
  //   // return theme === "dark" ? "/jellyfish-dark.png" : "/jellyfish-light.png";
  // }, [theme]);

  return (
    <nav className="z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2 md:gap-3"
            >
              {/* <ComponentIcon className="w-6 h-6 md:w-7 md:h-7" /> */}
              {/* <Logo alt={SITE_NAME} src={logo} width={24} height={30} /> */}
              <Image
                alt={SITE_NAME}
                src={logoImg}
                width={48}
                height={60}
                className="w-12 h-15 md:w-12 md:h-15"
              />
              <span className="text-gray-950 dark:text-gray-300 hidden md:block">
                {logoText}
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-baseline space-x-4">
              {isLoading ? (
                <>
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-8 w-16" />
                </>
              ) : (
                navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-muted-foreground hover:text-foreground no-underline px-3 h-16 flex items-center text-sm font-medium transition-colors relative",
                      isActiveLink(item.href) &&
                        "text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))
              )}
            </div>
            {/* <ActionButtons /> */}
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-6">
                  <Menu className="w-9 h-9" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="mt-6 flow-root">
                  <div className="space-y-2">
                    {isLoading ? (
                      <>
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                      </>
                    ) : (
                      <>
                        {navItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 no-underline transition-colors relative",
                              isActiveLink(item.href) && "text-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                        {/* <div className="px-3 pt-4">
                          <ActionButtons />
                        </div> */}
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
