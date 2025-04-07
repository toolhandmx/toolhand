import Image from "next/image";

import { CheckIcon } from "lucide-react";

import gradient1 from "./assets/gradient-1.webp";
import gradient2 from "./assets/gradient-2.webp";
import gradient3 from "./assets/gradient-3.webp";
import gradient4 from "./assets/gradient-4.webp";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Component() {
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
      price: 1699,
      features: [
        "Todos los beneficios anteriores",
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
      price: 2199,
      features: [
        "Todos los beneficios anteriores",
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
      price: 3599,
      features: [
        "Todos los beneficios anteriores",
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
    <section id="planes" className="flex flex-col">
      <h1 className="text-2xl font-bold text-center">Nuestros planes:</h1>
      <div className="flex flex-wrap p-12 gap-12">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="w-[18rem] shrink-0 grow-1 flex flex-col p-0 gap-0 overflow-hidden"
          >
            <CardHeader className="relative flex flex-col items-center justify-center p-12 overflow-hidden">
              <Image
                src={plan.image}
                alt={plan.title}
                className="object-cover absolute"
              />
              <h2 className="text-3xl font-bold z-10 text-black">
                {plan.title}
              </h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold">
                  ${plan.price.toLocaleString()}
                </span>
                <span className="italic text-muted-foreground font-semibold">
                  /mes
                </span>
              </div>
              <ul className="flex flex-col gap-2 mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon strokeWidth={4} className="text-emerald-500" />
                    <span className="text-pretty">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
