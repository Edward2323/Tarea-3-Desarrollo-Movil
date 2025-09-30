import { useState } from 'react';

export default function Sumadora() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [result, setResult] = useState(0);

  const Sumar = () => {
    setResult(valor1 + valor2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
          Sumadora
        </h1>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Número 1</label>
            <input
              onChange={(e) => setValor1(Number(e.target.value))}
              type="number"
              placeholder="Ingresa el primer número"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
              aria-label="Número 1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Número 2</label>
            <input
              onChange={(e) => setValor2(Number(e.target.value))}
              type="number"
              placeholder="Ingresa el segundo número"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition"
              aria-label="Número 2"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={Sumar}
              type="button"
              className="w-full py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg font-semibold transition"
            >
              ➕ Sumar
            </button>

            <div className="w-full text-center">
              <span className="block text-sm text-gray-500 mb-1">Resultado</span>
              <div className="px-4 py-3 border border-dashed border-indigo-300 rounded-lg text-xl font-bold text-indigo-700 bg-indigo-50">
                {result}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
