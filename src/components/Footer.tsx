import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 dark:bg-gray-100 dark:text-black transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Sección de "Sobre mí" y "Contacto" */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4">Álvaro Mateos</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition-colors duration-200 dark:hover:text-gray-700"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="mailto:alvaromar988@gmail.com"
                className="hover:text-gray-300 transition-colors duration-200 dark:hover:text-gray-700"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/3 text-center">
          <h3 className="text-lg font-bold mb-4">Redes Sociales</h3>
          <ul className="flex justify-center space-x-6">
            {/* LinkedIn */}
            <li>
              <a
                href="https://linkedin.com/in/ÁlvaroLinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200 dark:hover:text-gray-700"
              >
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-6.92 20.45h-3.69v-5.81c0-1.38-.03-3.17-1.93-3.17-1.93 0-2.23 1.51-2.23 3.07v5.91H4.77V8.97h3.54v1.57h.05c.49-.93 1.69-1.92 3.48-1.92 3.72 0 4.4 2.45 4.4 5.64v6.19h-.03zm-14.49-.03H4.77V8.97h3.54v11.45H4.82v.03zm1.76-13.01c-1.15 0-2.08-.94-2.08-2.1 0-1.15.94-2.09 2.08-2.09 1.15 0 2.08.94 2.08 2.09 0 1.15-.94 2.09-2.08 2.09zM21.45 20.45h-3.69v-5.81c0-1.38-.03-3.17-1.93-3.17-1.93 0-2.23 1.51-2.23 3.07v5.91H4.77V8.97h3.54v1.57h.05c.49-.93 1.69-1.92 3.48-1.92 3.72 0 4.4 2.45 4.4 5.64v6.19h-.03z" />
                </svg>
              </a>
            </li>
            {/* GitHub */}
            <li>
              <a
                href="https://github.com/ÁlvaroGit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200 dark:hover:text-gray-700"
              >
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.13 6.84 9.45.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1.02.07 1.56 1.04 1.56 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.93.36.31.68.91.68 1.84 0 1.33-.01 2.4-.01 2.72 0 .26.18.57.69.48A10.001 10.001 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
            </li>
            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/ÁlvaroFacebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200 dark:hover:text-gray-700"
              >
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35c-.734 0-1.325.592-1.325 1.325v21.351c0 .734.591 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.622h-3.123v9.294h6.126c.734 0 1.325-.591 1.325-1.324v-21.351c0-.734-.591-1.325-1.325-1.325z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Derechos reservados */}
        <div className="text-center lg:text-right mt-6 lg:mt-0 w-full lg:w-1/3">
          <p className="text-sm">
            © {currentYear} Álvaro Mateos. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2">
            Diseñado y desarrollado por Álvaro Mateos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
