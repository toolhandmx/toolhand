import Link from "next/link";

export default function Component() {
  return (
    <section className="flex flex-col items-center justify-center p-12 sm:pt-0">
      <h1 className="text-3xl font-bold text-center">
        ¿Tienes dudas o necesitas más información?
      </h1>
      <h2 className="text-xl font-semibold text-center mt-4 text-muted-foreground">
        Nuestro equipo está disponible para atenderte.
      </h2>
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
