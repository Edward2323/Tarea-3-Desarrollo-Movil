import React, { useState } from "react";

// Tabla de Multiplicar hasta el 13
// No se usan APIs externas.

export default function Tabla() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const n = Number(numero);
    if (!Number.isInteger(n)) {
      setTabla([]);
      return;
    }
    const nuevaTabla = [];
    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push({ factor: i, resultado: n * i });
    }
    setTabla(nuevaTabla);
  };

  const manejarReset = () => {
    setNumero("");
    setTabla([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Tabla de Multiplicar</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">Ingresa un número y verás su tabla de multiplicar hasta el 13.</p>

        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Número</span>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              type="number"
              placeholder="Ej: 7"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </label>

          <div className="flex gap-3">
            <button
              onClick={generarTabla}
              type="button"
              className="flex-1 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700"
            >
              Generar Tabla
            </button>
            <button
              onClick={manejarReset}
              type="button"
              className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-700"
            >
              Limpiar
            </button>
          </div>

          {tabla.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Resultados:</h2>
              <ul className="space-y-1 text-gray-700 font-medium">
                {tabla.map((item, index) => (
                  <li key={index} className="px-3 py-2 border rounded-md bg-gray-50">
                    {numero} × {item.factor} = {item.resultado}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
