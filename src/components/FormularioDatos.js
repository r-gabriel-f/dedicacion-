import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export const FormularioDatos = () => {
  const [fechaAniversario, setFechaAniversario] = useState(new Date());
  const [primerNombre, setPrimerNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    const fechaFormateada = format(fechaAniversario, "dd/MM/yyyy");

    if (
      fechaFormateada === "02/11/2023" &&
      primerNombre.toLowerCase() === "madai"
    ) {
      setMensaje(
        "♥Madai Alejandra Monrroy Vega♥ Eres el amor de mi vida te quiero mucho se que esoy medio raro aveces pero es para que no te vea triste o preocupada siempre te sacare una sonrisa en cualquier momento que estemos estoy muy feliz de poder en contrarte en mi camino te amo mucho mi reyna y siempre estare para ti en lo que sea mi amorshito mi bebecita brrrr ♥"
      );
    } else {
      setMensaje("Quien sera el otro no jajajaaj");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1
              className="text-4xl font-letra mb-5"
              htmlFor="fechaAniversario"
            >
              Fecha de aniversario
            </h1>
            <DatePicker
              className="py-2 px-3 text-gray-700 border-2 rounded  border-black"
              id="fechaAniversario"
              selected={fechaAniversario}
              onChange={(date) => setFechaAniversario(date)}
            />
          </div>
          <div className="mb-4">
            <h1
              className="text-4xl font-letra mb-5"
              htmlFor="primerNombre"
            >
              Primer nombre de mi amorshito
            </h1>
            <input
              className="border-2 rounded  border-black w-full py-2 px-3  "
              id="primerNombre"
              type="text"
              placeholder="Primer Nombre"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-2 rounded  border-black"
              type="button"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
          </div>
          {mensaje && (
            <div>
              <p className="mt-4 text-center text-green-500">{mensaje}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
