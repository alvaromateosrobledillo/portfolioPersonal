import {
  FaGithub,
  FaAngular,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaFireAlt,
  FaLink,
} from "react-icons/fa"; // Sustituir Firebase por un ícono similar
import LinkButton from "./LinkButton";

// Definir las etiquetas para las tecnologías utilizadas
const TAGS = {
  ANGULAR: {
    name: "Angular",
    class: "bg-red-600 text-white",
    icon: FaAngular, // Ícono de Angular desde React Icons
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-500 text-white",
    icon: FaJsSquare, // Usando el ícono de JavaScript/TypeScript desde React Icons
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: FaCss3Alt, // Ícono de CSS desde React Icons (para representar Tailwind CSS)
  },
  REACT: {
    name: "React",
    class: "bg-blue-500 text-white",
    icon: FaReact, // Ícono de React desde React Icons
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-yellow-500 text-white",
    icon: FaFireAlt, // Sustituto para Firebase, ícono de fuego
  },
  DOCKER: {
    name: "Docker",
    class: "bg-[#0db7ed] text-white",
    icon: FaDocker, // Ícono de Docker desde React Icons
  },
};

// Proyectos con detalles específicos
const PROJECTS = [
  {
    title: "Gloove",
    description:
      "Plataforma personalizada para la gestión de propietarios y huéspedes en el sector turístico. Desarrollada con React, Tailwind CSS y Firebase, permite gestionar propiedades e interactuar con el CRM de Odoo. El proyecto se despliega en Docker para facilitar la escalabilidad.",
    link: "https://software-gloove.web.app/",
    github: "https://github.com/alvaromateosrobledillo/gloove", // URL del repositorio en GitHub
    image: "/projects/gloove.png", // Asegúrate de tener la imagen en la carpeta correcta
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.FIREBASE, TAGS.DOCKER],
  },
  {
    title: "UpSpain CRM para Proveedores",
    description:
      "Sistema CRM diseñado específicamente para UpSpain para gestionar las interacciones con proveedores y automatizar los procesos de facturación. Desarrollado con Angular y TypeScript, este sistema no solo mejora la eficiencia operativa, sino que también ofrece una experiencia de usuario excepcional gracias al diseño moderno proporcionado por Tailwind CSS.",
    link: "https://billingmiddlewarefront-develop.azurewebsites.net/",
    github: "https://github.com/yourusername/dynamic-form-builder",
    image: "/projects/billing.png",
    tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.TAILWIND],
  },
  {
    title: "Portfolio Website",
    description:
      "Mi sitio web de portfolio profesional, desarrollado con Angular y TypeScript, estilizado con Tailwind CSS, destacando mis proyectos y habilidades.",
    link: "https://yourportfoliosite.com",
    github: "https://github.com/yourusername/portfolio-site",
    image: "/projects/rmotion2.png",
    tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.TAILWIND],
  },
  {
    title: "Portfolio Website",
    description:
      "Mi sitio web de portfolio profesional, desarrollado con Angular y TypeScript, estilizado con Tailwind CSS, destacando mis proyectos y habilidades.",
    link: "https://yourportfoliosite.com",
    github: "https://github.com/yourusername/portfolio-site",
    image: "/projects/web.personal.png",
    tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.TAILWIND],
  },
];

// Componente principal de proyectos
const ProjectsSection = () => (
  <div className="flex flex-col gap-y-16">
    {PROJECTS.map(({ image, title, description, tags, link, github }) => (
      <article
        className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        key={title}
      >
        <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              alt={title}
              className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
              src={image}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:max-w-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <ul className="flex flex-row mb-2 gap-x-2">
            {tags.map((tag) => (
              <li key={tag.name}>
                <span
                  className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                >
                  <tag.icon className="size-4" />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 text-gray-700 dark:text-gray-400">
            {description}
          </div>
          <footer className="flex items-end justify-start mt-4 gap-x-4">
            {github && (
              <LinkButton href={github}>
                <FaGithub className="size-6" />
                Code
              </LinkButton>
            )}
            {link && (
              <LinkButton href={link}>
                <FaLink className="size-4" />
                Preview
              </LinkButton>
            )}
          </footer>
        </div>
      </article>
    ))}
  </div>
);

export default ProjectsSection;
