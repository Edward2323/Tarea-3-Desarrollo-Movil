import React, { useState } from "react";


export default function TraductorNumeros() {
  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");
  const [error, setError] = useState("");

  const manejarTraducir = () => {
    const n = Number(numero);
    if (!Number.isInteger(n) || n < 1 || n > 1000) {
      setTexto("");
      setError("Ingresa un número entero entre 1 y 1000.");
      return;
    }
    setError("");
    setTexto(numeroALetras(n));
  };

  const numeroALetras = (n) => {
    if (n === 0) return "cero";
    if (n === 1000) return "mil";

    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];

    const especiales = {
      10: "diez",
      11: "once",
      12: "doce",
      13: "trece",
      14: "catorce",
      15: "quince",
      16: "dieciséis",
      17: "diecisiete",
      18: "dieciocho",
      19: "diecinueve",
      20: "veinte",
    };

    const decenas = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];

    const centenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    let resultado = "";

    // Centenas
    if (n >= 100) {
      const h = Math.floor(n / 100);
      const resto = n % 100;
      if (n === 100) return "cien";
      resultado += centenas[h];
      if (resto === 0) return resultado;
      // añadir espacio para lo que siga
      resultado += " ";
      n = resto;
    }

    // Decenas y unidades (ahora n está en 1..99)
    if (n <= 20) {
      if (especiales[n]) return (resultado + especiales[n]).trim();
      if (n === 0) return resultado.trim();
      return (resultado + unidades[n]).trim();
    }

    if (n < 30) {
      // 21..29 -> veintiuno, veintidós, etc. (sin espacio)
      const unidad = n % 10;
      if (unidad === 0) return (resultado + "veinte").trim();
      const veinti = "veinti" + unidades[unidad];
      return (resultado + veinti).trim();
    }

    // 30 en adelante: "treinta y uno"
    const d = Math.floor(n / 10);
    const u = n % 10;
    if (u === 0) return (resultado + decenas[d]).trim();
    return (resultado + decenas[d] + " y " + unidades[u]).trim();
  };

  const manejarReset = () => {
    setNumero("");
    setTexto("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-700">Traductor de Números a Letras</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">Ingresa un número entero entre 1 y 1000. El resultado se muestra en español (sin usar APIs).</p>

        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Número</span>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              type="number"
              min={1}
              max={1000}
              placeholder="Ej: 256"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </label>

          <div className="flex gap-3">
            <button onClick={manejarTraducir} className="flex-1 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700">Traducir</button>
            <button onClick={manejarReset} className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-700">Limpiar</button>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">En letras</label>
            <div className="min-h-[56px] px-4 py-3 border rounded-lg bg-gray-50 text-gray-800 font-medium">
              {texto || <span className="text-gray-400">Aquí aparecerá el número en letras</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
