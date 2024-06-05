import React, { useState } from "react";
import { Home } from "./home-component";

export const ApiComponent = () => {
    // Estados para controlar la visualización de los elementos
    const [first, setFirst] = useState(true); // Mostrar selección de tipo de materia prima
    const [second, setSecond] = useState(false); // Mostrar formulario para agregar información
    const [back, setBack] = useState(false); // Controlar el regreso a la página principal

    // Función para volver a la página principal
    const btnBack = () => {
        setBack(true);
    };

    // Si se presiona el botón de regreso, volver a la página principal
    if (back) {
        return <Home />;
    }

    return (
        <>
            {first ? (
                <button className="button" onClick={btnBack}>
                    ← Volver
                </button>
            ) : null}
            {second ? null : null} {/* Mostrar el formulario para agregar información de la materia prima */}
        </>
    );
};