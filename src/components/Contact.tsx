// ContactComponent.jsx

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Importar íconos de react-icons

const contactItems = [
  {
    label: "Correo electrónico",
    value: "alvaromar988@gmail.com",
    url: "mailto:alvaromar988@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alvaroLinkedin",
    url: "https://linkedin.com/in/alvaroLinkedin",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/alvaroGit",
    url: "https://github.com/alvaroGit",
    icon: FaGithub,
  },
];

const ContactSection = () => (
  <section id="contacto" className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-800 dark:text-gray-100 mb-24 md:mb-36">
    <p className="mb-8 text-lg text-center text-gray-600 dark:text-gray-300 max-w-prose">
      ¡Estemos en contacto! Puedes escribirme un correo o encontrarme en las redes sociales. Estoy disponible para proyectos, colaboraciones, o simplemente para hablar sobre tecnología.
    </p>
    
    <div className="flex flex-col md:flex-row gap-6">
      {
        contactItems.map((item) => (
          <a href={item.url} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500" aria-label={item.label}>
            <item.icon className="size-6 text-gray-800 dark:text-gray-100 mb-2 transition-transform transform hover:scale-110" />
            <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">{item.label}</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">{item.value}</span>
          </a>
        ))
      }
    </div>
    
    {/* Botón para enviar un mensaje */}
    <a
      href="mailto:alvaromar988@gmail.com"
      className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition-shadow shadow-lg hover:shadow-xl"
    >
      Envíame un mensaje
    </a>
  </section>
);

export default ContactSection;
