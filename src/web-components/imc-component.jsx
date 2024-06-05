import React, { useState } from "react";
import { Home } from "./home-component";

export const ImcComponent = () => {
    // Estados para controlar la visualización de los elementos
    const [first, setFirst] = useState(true); // Mostrar selección de tipo de materia prima
    const [second, setSecond] = useState(false); // Mostrar formulario para agregar información
    const [back, setBack] = useState(false); // Controlar el regreso a la página principal
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [img, setImg] = useState("");
    const [imcVal, setImc] = useState("");
    const [typeOb, setTypeOb] = useState("");
    // Función para volver a la página principal
    const btnBack = () => {
        setBack(true);
    };

    // Si se presiona el botón de regreso, volver a la página principal
    if (back) {
        return <Home />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target; // Destructuración de name y value del evento
        if (name === 'peso') {
            setPeso(value);
        } else if (name === 'altura') {
            setAltura(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        const imc = peso / (altura * altura);
        if (imc >= 18.5 && imc <= 24.9) {
            setImg('public/img/normal.png');
            setTypeOb('Normal');
            setImc(imc);
            setSecond(true);
        } else if (imc >= 25 && imc <= 29.9) {
            setImg('public/img/sobrepeso.png');
            setTypeOb('SobrePeso');
            setImc(imc);
            setSecond(true);
        } else if (imc >= 30 && imc <= 34.9) {
            setImg('public/img/obesidad1.png');
            setTypeOb('Obesidad I');
            setImc(imc);
            setSecond(true);
        } else if (imc >= 35 && imc <= 39.9) {
            setImg('public/img/obesidad2.png');
            setTypeOb('Obesidad II');
            setImc(imc);
            setSecond(true);
        } else if (imc >= 40) {
            setImg('public/img/obesidad3.png');
            setTypeOb('Obesidad III');
            setImc(imc);
            setSecond(true);
        }
        setFirst(false);
    };

    return (
        <>
            {first ? (
                <div className="container-form">
                    <button className="button" onClick={btnBack}>
                        ← Volver
                    </button>
                    <h1>Calculadora de IMC</h1>
                    <h1>Ingresar los Datos</h1>
                    <form className="formMP" onSubmit={handleSubmit}>
                        <div className="optionsForm">
                            <span>Peso</span>
                            <input type="number" id="peso" name="peso" placeholder="Kilogramos" value={peso}
                                onChange={handleChange} required />
                            <span>Altura</span>
                            <input type="number" id="altura" name="altura" placeholder="Metros" value={altura}
                                onChange={handleChange} required />
                        </div>
                        <button className="add" type="submit">
                            Calcular
                        </button>
                    </form>
                </div>

            ) : null}
            {second ?
                <div className="container-form">
                    <button className="button" onClick={btnBack}>
                        ← Volver
                    </button>
                    <h1>Calculadora de IMC</h1>
                    <h1>Ingresar los Datos</h1>
                    <div className="container-img">
                        <img src={img} alt="" />
                        <p>Valor: {imcVal}</p>
                        <p>{typeOb}</p>
                    </div>
                </div>
                : null
            }
        </>
    );
};