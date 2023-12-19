import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const FormularioDatos = () => {
    const [fechaAniversario, setFechaAniversario] = useState(new Date());
  const [primerNombre, setPrimerNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    if (
      fechaAniversario.getDate() === 2 &&
      fechaAniversario.getMonth() === 11 &&
      fechaAniversario.getFullYear() === 2023 &&
      primerNombre.toLowerCase() === "madai"
    ) {
      setMensaje("¡Correcto!");
    } else {
      setMensaje("¡Incorrecto! Por favor, verifica los datos ingresados.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fechaAniversario"
            >
              Fecha de aniversario
            </label>
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaAniversario"
              selected={fechaAniversario}
              onChange={(date) => setFechaAniversario(date)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="primerNombre"
            >
              Primer nombre de mi amorshito
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="primerNombre"
              type="text"
              placeholder="Primer Nombre"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Probar
            </button>
          </div>
          {mensaje && <p className="mt-4 text-center text-green-500">{mensaje}</p>}
        </form>
      </div>
    </div>
  );
};