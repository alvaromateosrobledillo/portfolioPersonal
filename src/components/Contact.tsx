import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa"; // Importar íconos de react-icons

const contactItems = [
  {
    label: "WhatsApp",
    value: "+34 687 854 801",
    url: "https://wa.me/34687854801", // Enlace directo a WhatsApp
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alvaromateosrobledillo",
    url: "https://www.linkedin.com/in/alvaromateosrobledillo",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/alvaromateosrobledillo",
    url: "https://github.com/alvaromateosrobledillo",
    icon: FaGithub,
  },
];

const ContactSection = () => (
  <section
    id="contacto"
    className="flex flex-col items-center justify-center py-16 md:py-24 text-gray-800 dark:text-gray-100 mb-24 md:mb-36"
  >
    <p className="mb-8 text-lg text-center text-gray-600 dark:text-gray-300 max-w-prose">
      ¡Estemos en contacto! Puedes enviarme un mensaje por WhatsApp, encontrarme
      en LinkedIn o ver mis proyectos en GitHub. Estoy disponible para
      proyectos, colaboraciones o simplemente para hablar sobre tecnología.
    </p>

    <div className="flex flex-col md:flex-row gap-6">
      {contactItems.map((item) => (
        <a
          href={item.url}
          className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-600 hover:border-yellow-400 dark:hover:border-yellow-500"
          aria-label={item.label}
        >
          <item.icon className="size-6 text-gray-800 dark:text-gray-100 mb-2 transition-transform transform hover:scale-110" />
          <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">
            {item.label}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {item.value}
          </span>
        </a>
      ))}
    </div>

    {/* Botón para enviar un mensaje */}
    <a
      href="https://wa.me/34687854801" // Enlace actualizado para WhatsApp
      className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500 transition-shadow shadow-lg hover:shadow-xl"
    >
      Envíame un mensaje
    </a>
  </section>
);

export default ContactSection;
