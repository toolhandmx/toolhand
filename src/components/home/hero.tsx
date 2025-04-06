import Image from "next/image";
import Link from "next/link";

import hero from "./assets/hero.webp";

export default function Component() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center relative h-fit p-16 bg-black"
    >
      <Image
        src={hero}
        alt="ToolHand's Hero Image"
        className="w-full h-full object-cover opacity-50 absolute inset-0"
      />
      <h1 className="font-bold text-white text-3xl md:text-6xl md:max-w-[66dvw] text-balance text-center text-shadow-lg z-10">
        Tecnología y creatividad al servicio de tu día a día
      </h1>
      <p className="font-semibold opacity-75 text-white text-xl md:text-2xl md:max-w-[66dvw] text-balance text-center text-shadow-lg z-10 mt-4">
        Nos especializamos en soluciones integrales para la reparación de
        celulares y creación de páginas web.
      </p>
      <Link
        className="text-white text-xl z-10 mt-8 bg-primary p-4 rounded-2xl hover:font-bold transition-all"
        href="https://wa.me/+525586029325"
        target="_blank"
      >
        Contactar ahora
      </Link>
    </section>
  );
}
