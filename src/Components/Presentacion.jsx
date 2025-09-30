import React from 'react';

export default function Presentacion() {
 
  const nombre = "Edward";
  const apellido = "Cabrera";
  const correo = "edwardcabrera2323@gmail.com";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
        <img
          src="../assets/etua.jpeg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mx-auto mb-6 shadow-md border border-gray-200"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{nombre} {apellido}</h1>
        <p className="text-gray-600 font-medium">{correo}</p>

        <div className="mt-6 space-y-2 text-left">
          <label className="block text-sm font-semibold text-gray-700">
            Nombre: <span className="font-normal text-gray-600">{nombre}</span>
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Apellido: <span className="font-normal text-gray-600">{apellido}</span>
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Correo: <span className="font-normal text-gray-600">{correo}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
