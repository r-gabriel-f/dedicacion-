import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import Swal from "sweetalert2";
import yo from "../imagene/yo.webp";
import error from "../imagene/error.webp";
export const FormularioDatos = () => {
  const [fechaAniversario, setFechaAniversario] = useState(new Date());
  const [primerNombre, setPrimerNombre] = useState("");

  const handleSubmit = () => {
    const fechaFormateada = format(fechaAniversario, "dd/MM/yyyy");

    if (
      fechaFormateada === "02/11/2023" &&
      primerNombre.toLowerCase() === "madai"
    ) {
      Swal.fire({
        title: "TE AMO :)",
        text: "♥Querida Madai Alejandra Monrroy Vega, En el jardín de mi corazón, florece una flor única y hermosa: tú. Cada día a tu lado es un regalo que atesoro con gratitud y amor. Tu luz ilumina mi vida de maneras que nunca imaginé, y cada momento contigo es un recordatorio de la suerte que tengo de tenerte a mi lado.        Eres la melodía que alegra mis días y la calma que serena mis noches. Tu sonrisa es mi faro en los días nublados, y tus abrazos son el refugio donde encuentro paz y felicidad. Cada pequeño detalle de ti me enamora un poco más, y estoy agradecido por cada instante que compartimos juntos.  Prometo amarte con todo mi ser, con paciencia en los desafíos y alegría en los triunfos. Eres mi inspiración, mi confidente y mi mejor amiga. En este viaje llamado vida, estoy agradecido de tenerte como mi compañera de ruta. Gracias por ser mi razón de sonreír, por llenar mi mundo de amor y por ser la razón por la cual mi corazón late con tanta fuerza. Te amo más de lo que las palabras pueden expresar, y mi deseo más profundo es hacerte feliz todos los días.  Con todo mi amor,   Robert Gabriel Flores bebecita brrrrrr♥",
        imageUrl: yo,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Mi Reyna",
      });
    } else {
      Swal.fire({
        title: "LO OLVIDASTE :(",
        text: "Quien sera el otro noooooo jajajaaj :v",
        imageUrl: error,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image",
        cancelButtonText: "Recuerdate",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="text-4xl font-letra mb-5" htmlFor="fechaAniversario">
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
            <h1 className="text-4xl font-letra mb-5" htmlFor="primerNombre">
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
        </form>
      </div>
    </div>
  );
};
