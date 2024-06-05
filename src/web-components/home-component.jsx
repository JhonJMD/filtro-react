// Importamos las dependencias necesarias de React y otros componentes
import React, { useState } from "react";
import { ImcComponent } from "./imc-component";
import { GaleriaComponent } from "./galeria-component";
import { TablaComponent } from "./tabla-component";
import { ApiComponent } from "./api-component";

// Definimos el componente principal Home
export const Home = () => {
    // Usamos el hook useState para gestionar el estado de control
    const [control, setControl] = useState(null);

    // Usamos un switch para renderizar diferentes componentes según el valor de control
    switch (control) {
        case 1:
            return <ImcComponent />;
        case 2:
            return <GaleriaComponent />;
        case 3:
            return <TablaComponent />;
        case 4:
            return <ApiComponent/>;
        default:
            break;
    }

    // Renderizamos la interfaz principal cuando control es null o no coincide con ningún caso del switch
    return (
        <>
            <div className="container-home">
                <h1>Problemas Fitro</h1>
                <div className="option-home">
                    {/* Opción para gestionar materia prima */}
                    <div
                        className="options-mPrima options"
                        tabIndex="0"
                        onClick={() => setControl(1)}
                    >
                        <img src="./bmi.png" alt="" />
                        <p>IMC</p>
                    </div>
                    {/* Opción para gestionar mano de obra */}
                    <div
                        className="options-mObra options"
                        tabIndex="0"
                        onClick={() => setControl(2)}
                    >
                        <img src="./picture.png" alt="" />
                        <p>Galeria de Imagenes</p>
                    </div>
                    {/* Opción para gestionar costos indirectos */}
                    <div
                        className="options-cIndirectos options"
                        tabIndex="0"
                        onClick={() => setControl(3)}
                    >
                        <img src="./table.png" alt="" />
                        <p>Tabla Dinamica</p>
                    </div>
                    {/* Opción para ver informes */}
                    <div
                        className="options-cInformes options"
                        tabIndex="0"
                        onClick={() => setControl(4)}
                    >
                        <img src="./api.png" alt="" />
                        <p>API</p>
                    </div>
                </div>
            </div>
        </>
    );
};