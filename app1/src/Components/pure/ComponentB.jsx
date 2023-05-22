import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contactos';

const ComponentB = ({ContactoP}) => {
    return (
        <div>
            <h1>Componente B id: {ContactoP.id}</h1>
            <h2>Name: {ContactoP.name} </h2>
            <h2>Last Name: {ContactoP.lastName} </h2>
            <h3>Email: {ContactoP.email} </h3>
            <h3>Conected: {ContactoP.conected ? 'Contacto En Linea' : 'Contacto No Disponible'}</h3>            
        </div>
    );
};


ComponentB.propTypes = {
    ContactoP: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
