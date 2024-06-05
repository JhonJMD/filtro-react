import React, { useState } from "react";
import { Home } from "./home-component";
import { getData, putData } from "../api-services/api-service.jsx";

export const ApiComponent = () => {
    // Estados para controlar la visualización de los elementos
    const [first, setFirst] = useState(true); // Mostrar selección de tipo de materia prima
    const [second, setSecond] = useState(false); // Mostrar formulario para agregar información
    const [back, setBack] = useState(false); // Controlar el regreso a la página principal
    const [formData, setFormData] = useState({ // Estado para los datos del formulario
        nameN: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            nameM: "",
            catchPhrase: "",
            bs: ""
        }
    });
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
        setFormData((prevData) => ({ ...prevData, [name]: value })); // Actualiza el estado del formulario
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        try {
            const id = '1'; // Se guarda la ID del elemento seleccionado de la variable global
            const baseUrl = "https://jsonplaceholder.typicode.com"; // URL base de la API
            const endpoint = "users"; // Endpoint para acceder a materia prima

            // Obtener los datos actuales del elemento a actualizar
            const currentData = await getData(baseUrl, endpoint, id);

            // Actualizar solo los campos del formulario en los datos actuales
            const updatedData = {
                name: formData.nameN,
                username: formData.username,
                email: formData.email,
                address: {
                    street: formData.address.street,
                    suite: formData.address.suite,
                    city: formData.address.city,
                    zipcode: formData.address.zipcode,
                    geo: {
                        lat: formData.address.geo.lat,
                        lng: formData.address.geo.lng
                    }
                },
                phone: formData.phone,
                website: formData.website,
                company: {
                    name: formData.company.nameM,
                    catchPhrase: formData.company.catchPhrase,
                    bs: formData.company.bs
                }
            }

            await putData(baseUrl, endpoint, updatedData, id); // Enviar los datos actualizados a la API
        } catch (error) {
            console.error('Error al actualizar los datos:', error); // Manejo de errores
        }
    };

    return (
        <>
            {first ? (
                <div className="container-form">
                    <button className="button" onClick={btnBack}>
                        ← Volver
                    </button>
                    <h1>API</h1>
                    <form className="formMP" onSubmit={handleSubmit}>
                        <div className="optionsForm">
                            <span>Name</span>
                            <input type="text" id="nameN" name="nameN" placeholder="Name" value={formData.nameN} onChange={handleChange} required />
                        </div>
                        <div className="optionsForm">
                            <span>Username</span>
                            <input type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="optionsForm">
                            <span>Email</span>
                            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <br />
                        <span>Adress</span>
                        <hr />
                        <div className="optionsForm">
                            <span>Street</span>
                            <input type="text" id="street" name="street" placeholder="Street" value={formData.address.street} onChange={handleChange} required />
                            <span>Suite</span>
                            <input type="text" id="suite" name="suite" placeholder="Suite" value={formData.address.suite} onChange={handleChange} required />
                            <span>City</span>
                            <input type="text" id="city" name="city" placeholder="City" value={formData.address.city} onChange={handleChange} required />
                            <span>ZipCode</span>
                            <input type="number" id="zipCode" name="zipCode" placeholder="zipCode" value={formData.address.zipcode} onChange={handleChange} required />
                            <br />
                            <span>Geo</span>
                            <hr />
                            <span>Lat</span>
                            <input type="number" id="lat" name="lat" placeholder="Lat" value={formData.address.geo.lat} onChange={handleChange} required />
                            <span>Lng</span>
                            <input type="number" id="lng" name="lng" placeholder="Lng" value={formData.address.geo.lng} onChange={handleChange} required />
                        </div>
                        <br />
                        <div className="optionsForm">
                            <span>Phone</span>
                            <input type="number" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="optionsForm">
                            <span>Phone</span>
                            <input type="number" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="optionsForm">
                            <span>Website</span>
                            <input type="text" id="website" name="website" placeholder="Website" value={formData.website} onChange={handleChange} required />
                        </div>
                        <br />
                        <span>Company</span>
                        <hr />
                        <div className="optionsForm">
                            <span>Name</span>
                            <input type="text" id="nameM" name="nameM" placeholder="Name" value={formData.company.nameM} onChange={handleChange} required />
                            <span>CatchPhrase</span>
                            <input type="text" id="catchPhrase" name="catchPhrase" placeholder="CatchPhrase" value={formData.company.catchPhrase} onChange={handleChange} required />
                            <span>Bs</span>
                            <input type="text" id="bs" name="catchPhrase" placeholder="CatchPhrase" value={formData.company.catchPhrase} onChange={handleChange} required />
                        </div>
                        <button className="add" type="submit">
                            Agregar
                        </button>
                    </form>
                </div>
            ) : null}
            {second ? null : null} {/* Mostrar el formulario para agregar información de la materia prima */}
        </>
    );
};