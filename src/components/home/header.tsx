import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Component() {
  const menu = [
    {
      href: "#inicio",
      title: "Inicio",
    },
    {
      href: "#nosotros",
      title: "Nosotros",
    },
    {
      href: "#servicios",
      title: "Servicios",
    },
    {
      href: "https://wa.me/+525610348480",
      title: "Contacto",
      external: true,
    },
  ];
  return (
    <header className="px-4 sm:px-12 py-4 bg-background shadow-sm sticky top-0 z-50 border-b flex items-center justify-between gap-4">
      {/* Start */}
      <div className="flex items-center gap-4">
        {/* Menu Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="sr-only">ToolHand</SheetTitle>
              <SheetDescription className="sr-only">
                Menú principal
              </SheetDescription>
              <div className="flex">
                <svg viewBox="0 0 1660 256" height="2rem">
                  <path
                    d="M42.68 32.68c13-11.62 28.38-20.62 45.33-26.18 9.38 11.71 23.81 19.21 39.99 19.21s30.61-7.5 39.99-19.21c16.95 5.56 32.33 14.57 45.33 26.18-5.45 13.96-4.73 30.18 3.36 44.17 8.09 14 21.8 22.73 36.64 24.99 1.76 8.44 2.68 17.19 2.68 26.15s-.92 17.71-2.68 26.15c-14.84 2.27-28.55 11-36.64 24.99-8.08 13.99-8.8 30.21-3.36 44.17-13 11.62-28.38 20.62-45.33 26.19-9.38-11.71-23.81-19.21-39.99-19.21s-30.61 7.5-39.99 19.21c-16.95-5.56-32.33-14.57-45.33-26.19 5.45-13.96 4.73-30.18-3.36-44.17-8.09-14-21.8-22.73-36.64-24.99C.92 145.7-0 136.95-0 127.99s.92-17.71 2.68-26.15c14.84-2.26 28.55-11 36.64-24.99 8.08-13.99 8.8-30.21 3.36-44.17ZM147.2 161.22c18.37-10.59 24.66-34.05 14.06-52.4-10.6-18.35-34.09-24.63-52.46-14.04s-24.66 34.05-14.06 52.4c10.6 18.35 34.09 24.63 52.46 14.04Z"
                    fill="var(--primary)"
                  />
                  <path
                    d="M349.64 211.78V89.73H304V44.44h138.52v45.29H397.1v122.05h-47.45Zm187.33 2.72c-25.01 0-45.95-8.3-62.82-24.91-16.72-16.76-25.08-37.28-25.08-61.59s8.36-44.91 25.08-61.37c16.72-16.76 37.58-25.13 62.59-25.13s45.87 8.38 62.59 25.13c16.72 16.46 25.08 36.99 25.08 61.59s-8.36 44.76-25.08 61.36c-16.57 16.61-37.36 24.91-62.37 24.91Zm-.23-46.65c10.99 0 20.26-3.77 27.79-11.32 7.53-7.85 11.22-17.36 11.07-28.53-.15-11.62-3.99-21.21-11.52-28.76-7.38-7.39-16.5-11.1-27.34-11.1s-20.04 3.78-27.57 11.32c-7.53 7.55-11.3 17.06-11.3 28.53s3.76 20.99 11.3 28.53c7.53 7.55 16.72 11.32 27.57 11.32ZM726.78 214.5c-25.01 0-45.95-8.3-62.82-24.91-16.72-16.76-25.08-37.28-25.08-61.59s8.36-44.91 25.08-61.37c16.72-16.76 37.58-25.13 62.59-25.13s45.87 8.38 62.59 25.13c16.72 16.46 25.08 36.99 25.08 61.59s-8.36 44.76-25.08 61.36c-16.57 16.61-37.36 24.91-62.37 24.91Zm-.23-46.65c10.99 0 20.26-3.77 27.79-11.32 7.53-7.85 11.22-17.36 11.07-28.53-.15-11.62-3.99-21.21-11.52-28.76-7.38-7.39-16.5-11.1-27.34-11.1s-20.04 3.78-27.57 11.32c-7.53 7.55-11.3 17.06-11.3 28.53s3.76 20.99 11.3 28.53c7.53 7.55 16.72 11.32 27.57 11.32Zm236.58 43.93H836.82V44.44h47.45v122.5h78.86v44.84Zm65.31 0h-47V44.44h47v62.04h52.42V44.44h47.45v167.34h-47.45v-60.01h-52.42v60.01Zm278.16 0h-48.13l-7.91-27.4h-50.39l-8.36 27.4h-48.13l59.43-167.34h45.87l57.62 167.34Zm-95.14-67.93h28.47l-14.01-46.19-14.46 46.19Zm217.61-15.62V44.44h46.1v167.34h-36.83l-69.82-82.65v82.65h-46.1V44.44h35.25l71.4 83.78Zm145.97 83.55h-69.15V44.44h69.6c26.81 0 47.53 7.47 62.14 22.42 14.91 14.95 22.37 35.4 22.37 61.37s-7.53 46.19-22.6 61.14c-14.91 14.95-35.7 22.42-62.37 22.42ZM1552.89 89.73v76.76h24.4c10.99 0 19.36-3.77 25.08-11.32 5.88-7.55 8.81-16.6 8.81-27.17s-2.94-19.55-8.81-26.95c-5.73-7.55-14.09-11.32-25.08-11.32h-24.4Z"
                    fill="var(--foreground)"
                  />
                </svg>
              </div>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              {menu.map((item, index) => (
                <SheetClose key={index} asChild>
                  <Link
                    className="text-md font-semibold"
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        {/* Logo */}
        <div className="flex">
          <svg viewBox="0 0 1660 256" height="2rem">
            <path
              d="M42.68 32.68c13-11.62 28.38-20.62 45.33-26.18 9.38 11.71 23.81 19.21 39.99 19.21s30.61-7.5 39.99-19.21c16.95 5.56 32.33 14.57 45.33 26.18-5.45 13.96-4.73 30.18 3.36 44.17 8.09 14 21.8 22.73 36.64 24.99 1.76 8.44 2.68 17.19 2.68 26.15s-.92 17.71-2.68 26.15c-14.84 2.27-28.55 11-36.64 24.99-8.08 13.99-8.8 30.21-3.36 44.17-13 11.62-28.38 20.62-45.33 26.19-9.38-11.71-23.81-19.21-39.99-19.21s-30.61 7.5-39.99 19.21c-16.95-5.56-32.33-14.57-45.33-26.19 5.45-13.96 4.73-30.18-3.36-44.17-8.09-14-21.8-22.73-36.64-24.99C.92 145.7-0 136.95-0 127.99s.92-17.71 2.68-26.15c14.84-2.26 28.55-11 36.64-24.99 8.08-13.99 8.8-30.21 3.36-44.17ZM147.2 161.22c18.37-10.59 24.66-34.05 14.06-52.4-10.6-18.35-34.09-24.63-52.46-14.04s-24.66 34.05-14.06 52.4c10.6 18.35 34.09 24.63 52.46 14.04Z"
              fill="var(--primary)"
            />
            <path
              d="M349.64 211.78V89.73H304V44.44h138.52v45.29H397.1v122.05h-47.45Zm187.33 2.72c-25.01 0-45.95-8.3-62.82-24.91-16.72-16.76-25.08-37.28-25.08-61.59s8.36-44.91 25.08-61.37c16.72-16.76 37.58-25.13 62.59-25.13s45.87 8.38 62.59 25.13c16.72 16.46 25.08 36.99 25.08 61.59s-8.36 44.76-25.08 61.36c-16.57 16.61-37.36 24.91-62.37 24.91Zm-.23-46.65c10.99 0 20.26-3.77 27.79-11.32 7.53-7.85 11.22-17.36 11.07-28.53-.15-11.62-3.99-21.21-11.52-28.76-7.38-7.39-16.5-11.1-27.34-11.1s-20.04 3.78-27.57 11.32c-7.53 7.55-11.3 17.06-11.3 28.53s3.76 20.99 11.3 28.53c7.53 7.55 16.72 11.32 27.57 11.32ZM726.78 214.5c-25.01 0-45.95-8.3-62.82-24.91-16.72-16.76-25.08-37.28-25.08-61.59s8.36-44.91 25.08-61.37c16.72-16.76 37.58-25.13 62.59-25.13s45.87 8.38 62.59 25.13c16.72 16.46 25.08 36.99 25.08 61.59s-8.36 44.76-25.08 61.36c-16.57 16.61-37.36 24.91-62.37 24.91Zm-.23-46.65c10.99 0 20.26-3.77 27.79-11.32 7.53-7.85 11.22-17.36 11.07-28.53-.15-11.62-3.99-21.21-11.52-28.76-7.38-7.39-16.5-11.1-27.34-11.1s-20.04 3.78-27.57 11.32c-7.53 7.55-11.3 17.06-11.3 28.53s3.76 20.99 11.3 28.53c7.53 7.55 16.72 11.32 27.57 11.32Zm236.58 43.93H836.82V44.44h47.45v122.5h78.86v44.84Zm65.31 0h-47V44.44h47v62.04h52.42V44.44h47.45v167.34h-47.45v-60.01h-52.42v60.01Zm278.16 0h-48.13l-7.91-27.4h-50.39l-8.36 27.4h-48.13l59.43-167.34h45.87l57.62 167.34Zm-95.14-67.93h28.47l-14.01-46.19-14.46 46.19Zm217.61-15.62V44.44h46.1v167.34h-36.83l-69.82-82.65v82.65h-46.1V44.44h35.25l71.4 83.78Zm145.97 83.55h-69.15V44.44h69.6c26.81 0 47.53 7.47 62.14 22.42 14.91 14.95 22.37 35.4 22.37 61.37s-7.53 46.19-22.6 61.14c-14.91 14.95-35.7 22.42-62.37 22.42ZM1552.89 89.73v76.76h24.4c10.99 0 19.36-3.77 25.08-11.32 5.88-7.55 8.81-16.6 8.81-27.17s-2.94-19.55-8.81-26.95c-5.73-7.55-14.09-11.32-25.08-11.32h-24.4Z"
              fill="var(--foreground)"
            />
          </svg>
        </div>
      </div>
      {/* End */}
      <div className="flex items-center gap-4">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {menu.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  className="text-base font-semibold border-b-2 border-b-transparent hover:border-b-primary"
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}
