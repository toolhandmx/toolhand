import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Component() {
  const features = [
    {
      icon: <i className="ri-sparkling-fill text-5xl text-primary" />,
      title: "Calidad Excepcional",
      description: (
        <p>
          Nos comprometemos a ofrecer <b>servicios de la más alta calidad</b>.
          Cada detalle, desde la selección de materiales hasta la ejecución del
          proyecto, es supervisado por expertos para{" "}
          <b>garantizar resultados que superen sus expectativas</b>.
        </p>
      ),
    },
    {
      icon: <i className="ri-cpu-line text-5xl text-primary" />,
      title: "Tecnología de Vanguardia",
      description: (
        <p>
          Utilizamos las <b>últimas tecnologías</b> y{" "}
          <b>metodologías innovadoras</b> para mantenernos a la vanguardia.{" "}
          <b>Nuestro equipo se capacita constantemente</b> para aplicar{" "}
          <b>soluciones creativas y eficientes</b> en cada reparación o diseño
          web.
        </p>
      ),
    },
    {
      icon: <i className="ri-shake-hands-fill text-5xl text-primary" />,
      title: "Experiencia y Profesionalismo",
      description: (
        <p>
          Con experiencia en el sector, contamos con un{" "}
          <b>equipo de profesionales capacitados</b>. Nos enorgullece ofrecer un
          servicio responsable, transparente y enfocado en la mejora continua,{" "}
          <b>respaldado por casos de éxito comprobados.</b>
        </p>
      ),
    },
    {
      icon: <i className="ri-customer-service-fill text-5xl text-primary" />,
      title: "Atención Personalizada y Compromiso",
      description: (
        <p>
          Cada cliente es único. Por eso, diseñamos <b>soluciones a medida</b> y
          brindamos <b>asesoría personalizada</b>, asegurándonos de entender y
          satisfacer tus necesidades específicas en cada etapa del proceso.
        </p>
      ),
    },
    {
      icon: <i className="ri-award-fill text-5xl text-primary" />,
      title: "Garantía y Confianza",
      description: (
        <p>
          Tu tranquilidad es nuestra prioridad. Respaldamos todos nuestros
          trabajos con <b>garantías claras</b> y un{" "}
          <b>servicio post-venta dedicado</b>, para que puedas confiar en que tu
          inversión estará protegida y que{" "}
          <b>siempre estarás en buenas manos</b>.
        </p>
      ),
    },
  ];
  return (
    <section
      id="nosotros"
      className="flex flex-col items-center justify-center gap-4 p-4 sm:gap-12 sm:p-12"
    >
      <h1 className="text-2xl font-bold text-center p-6 sm:p-0">
        Nuestras características:
      </h1>
      <div className="flex flex-wrap h-full gap-4 sm:gap-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="w-72 grow-1 flex flex-col text-center text-balance"
          >
            <CardHeader className="flex flex-col items-center">
              {feature.icon}
              <h2 className="text-xl font-bold">{feature.title}</h2>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
