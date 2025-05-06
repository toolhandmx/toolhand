"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "lucide-react";

import { useState } from "react";

import gradient1 from "./assets/gradient-1.webp";
import gradient2 from "./assets/gradient-2.webp";
import gradient3 from "./assets/gradient-3.webp";
import gradient4 from "./assets/gradient-4.webp";

import { useMediaQuery } from "@/hooks/use-media-query";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Component() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Ver planes</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nuestros planes</DialogTitle>
            <DialogDescription>
              Selecciona un plan para ver sus detalles:
            </DialogDescription>
          </DialogHeader>
          <Plans />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Ver planes</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-2xl">Nuestros planes</DrawerTitle>
          <DrawerDescription>
            Selecciona un plan para ver sus detalles:
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <Plans />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function Plans() {
  const plans = [
    {
      id: "basic",
      title: "Basic",
      image: gradient1,
      price: 879,
      features: [
        "Página web de 4 secciones",
        "Optimizada para móviles",
        "Optimizada para motores de búsqueda",
        "4 modificaciones por mes",
        "Administración de contenido",
        "Soporte ilimitado",
        "Dominio y hosting",
        "Certificado SSL",
        "Botones interactivos",
      ],
    },
    {
      id: "standard",
      title: "Standard",
      image: gradient2,
      price: 1849,
      features: [
        "Todo lo que incluye Basic",
        "Página web de 6 secciones",
        "6 modificaciones por mes",
        "Menú de productos",
        "Branding de marca",
        "Protección DDoS",
        "Escáner de malware",
        "Aviso de privacidad",
      ],
    },
    {
      id: "premium",
      title: "Premium",
      image: gradient3,
      price: 2499,
      features: [
        "Todo lo que incluye Standard",
        "Página web de 8 secciones",
        "8 modificaciones por mes",
        "Tienda en línea sencilla",
        "Carrito de compras",
        "Inicio de sesión",
        "Portal de pago",
        "Facturación de compras",
      ],
    },
    {
      id: "ultimate",
      title: "Ultimate",
      image: gradient4,
      price: 3999,
      features: [
        "Todo lo que incluye Premium",
        "Página web de 12 secciones",
        "12 modificaciones por mes",
        "Tienda en línea completa",
        "Gestión de relaciones con clientes",
        "Panel de estadísticas",
        "Panel de administración",
      ],
    },
  ];
  return (
    <Tabs defaultValue="standard">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="standard">Standard</TabsTrigger>
        <TabsTrigger value="premium">Premium</TabsTrigger>
        <TabsTrigger value="ultimate">Ultimate</TabsTrigger>
      </TabsList>
      {plans.map((plan, index) => (
        <TabsContent key={index} value={plan.id} className="flex flex-col">
          <header className="mt-2 relative flex flex-col items-center justify-center p-6 rounded-xl overflow-hidden">
            <Image
              src={plan.image}
              alt={plan.title}
              className="object-cover absolute"
            />
            <h2 className="text-4xl font-bold z-10 text-black">{plan.title}</h2>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon
                  strokeWidth={4}
                  className="text-emerald-500 shrink-0"
                />
                <span className="text-pretty">{feature}</span>
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.me/+525610348480"
            target="_blank"
            className={cn(buttonVariants(), "mt-4 w-full")}
          >
            Me interesa
          </Link>
        </TabsContent>
      ))}
    </Tabs>
  );
}
