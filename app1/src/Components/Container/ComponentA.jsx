import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contactos';
import ComponentB from '../pure/ComponentB';

const ComponentA = () => {
    const defaultContacto = new Contacto(0,'hola','mundo','holamundo@gmail.com',true)
    return (
        <div>
            <ComponentB ContactoP={defaultContacto}/>
        </div>
    );
};


export default ComponentA;
