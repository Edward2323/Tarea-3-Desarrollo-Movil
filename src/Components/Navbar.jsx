import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-base md:text-lg font-semibold tracking-wide">
            TAREA 3 | Introducción al Desarrollo de Aplicaciones Móviles
          </div>

          {/* Links de navegación */}
          <div className="flex space-x-10">
            <Link
              to="/"
              className="px-2 py-1 text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Presentación
            </Link>
            <Link
              to="/Sumadora"
              className="px-2 py-1 text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Sumadora
            </Link>
            <Link
              to="/Traductor"
              className="px-2 py-1 text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Traductor
            </Link>
            <Link
              to="/Tabla"
              className="px-2 py-1 text-lg hover:text-indigo-300 transition-colors duration-200"
            >
              Tabla
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
