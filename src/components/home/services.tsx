import Image from "next/image";
import Link from "next/link";

import {
  WrenchIcon,
  ShieldCheckIcon,
  AwardIcon,
  HeadsetIcon,
  SplinePointerIcon,
  ScanEyeIcon,
  RadioTowerIcon,
  ShoppingCartIcon,
  MonitorSmartphoneIcon,
  PackageSearchIcon,
  CreditCardIcon,
  LineChartIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import smartphoneRepair from "./assets/smartphone-repair.webp";
import webDevelopment from "./assets/web-development.webp";
import pointOfSale from "./assets/point-of-sale.webp";

export default function Component() {
  const services = [
    {
      image: smartphoneRepair,
      title: "Reparación de celulares",
      subtitle: "Vuelve a confiar en tu dispositivo",
      description:
        "Sabemos lo importante que es tu celular. Ofrecemos diagnósticos gratuitos, reparaciones rápidas y repuestos de alta calidad para que tu dispositivo funcione como nuevo.",
      features: [
        {
          icon: <WrenchIcon className="text-primary shrink-0" />,
          text: "Reparación de pantallas, baterías, y componentes internos",
        },
        {
          icon: <ShieldCheckIcon className="text-primary shrink-0" />,
          text: "Técnicos certificados y experiencia comprobada",
        },
        {
          icon: <AwardIcon className="text-primary shrink-0" />,
          text: "Garantía en todas nuestras reparaciones",
        },
        {
          icon: <HeadsetIcon className="text-primary shrink-0" />,
          text: "Atención personalizada y servicio a domicilio",
        },
      ],
      footer: (
        <span className="mt-2">
          ¿Problemas con tu celular?{" "}
          <b>
            ¡
            <Link
              href="https://wa.me/+525586029325"
              target="_blank"
              className="text-primary"
            >
              Contáctenos ahora
            </Link>{" "}
            y recupéralo!
          </b>
        </span>
      ),
    },
    {
      image: webDevelopment,
      title: "Creación de páginas web",
      subtitle: "Impulsa tu presencia en línea",
      description:
        "Transforma tu idea en un sitio web moderno, responsivo y optimizado. Nuestro equipo de expertos crea páginas personalizadas que reflejan la identidad de tu negocio y te conectan con tus clientes.",
      features: [
        {
          icon: <SplinePointerIcon className="text-primary shrink-0" />,
          text: "Diseño atractivo y adaptativo",
        },
        {
          icon: <ScanEyeIcon className="text-primary shrink-0" />,
          text: "Optimizado para mejorar tu visibilidad",
        },
        {
          icon: <RadioTowerIcon className="text-primary shrink-0" />,
          text: "Integración con redes sociales",
        },
        {
          icon: <ShoppingCartIcon className="text-primary shrink-0" />,
          text: "Soluciones de tienda en línea",
        },
        {
          icon: <HeadsetIcon className="text-primary shrink-0" />,
          text: "Soporte y mantenimiento continuo",
        },
      ],
      footer: (
        <span className="mt-2">
          ¿Listo para dar el salto al mundo digital?{" "}
          <b>
            ¡
            <Link
              href="https://wa.me/+525586029325"
              target="_blank"
              className="text-primary"
            >
              Contáctenos ahora
            </Link>{" "}
            y reciba una asesoría gratuita hoy mismo!
          </b>
        </span>
      ),
    },
    {
      image: pointOfSale,
      title: "Implementación de puntos de venta",
      subtitle: "Gestiona tu negocio de forma eficiente",
      description:
        "Te ayudamos a modernizar tu negocio con sistemas de punto de venta intuitivos y personalizados. Te ofrecemos todo lo necesario para que tengas el control total de tus ventas, inventario y clientes.",
      features: [
        {
          icon: <MonitorSmartphoneIcon className="text-primary shrink-0" />,
          text: "Sistemas adaptables a cualquier tipo de negocio",
        },
        {
          icon: <PackageSearchIcon className="text-primary shrink-0" />,
          text: "Control de inventario en tiempo real",
        },
        {
          icon: <CreditCardIcon className="text-primary shrink-0" />,
          text: "Integración con métodos de pago modernos",
        },
        {
          icon: <LineChartIcon className="text-primary shrink-0" />,
          text: "Reportes y estadísticas de ventas automáticas",
        },
        {
          icon: <HeadsetIcon className="text-primary shrink-0" />,
          text: "Capacitación y soporte técnico incluidos",
        },
      ],
      footer: (
        <span className="mt-2">
          ¿Quieres optimizar la administración de tu negocio?{" "}
          <b>
            ¡
            <Link
              href="https://wa.me/+525586029325"
              target="_blank"
              className="text-primary"
            >
              Contáctenos ahora
            </Link>{" "}
            y comienza a vender de forma inteligente!
          </b>
        </span>
      ),
    },
  ];
  return (
    <section
      id="servicios"
      className="flex flex-col items-center gap-4 p-4 sm:gap-12 sm:p-12 pt-0"
    >
      <h1 className="text-2xl font-bold text-center p-6 sm:p-0">
        Nuestros servicios:
      </h1>
      <div className="flex flex-col gap-4 sm:gap-12">
        {services.map((service, index) => (
          <Card key={index} className="grow-1 p-0 overflow-hidden">
            <CardContent
              className={`flex flex-col justify-between md:flex-row text-balance p-0 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2 p-6">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <h3 className="text-xl font-semibold text-muted-foreground -mt-2">
                  {service.subtitle}
                </h3>
                <p className="mt-2">{service.description}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {feature.icon}
                      <span className="leading-4">
                        <b>{feature.text}</b>
                      </span>
                    </li>
                  ))}
                </ul>
                {service.footer}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
