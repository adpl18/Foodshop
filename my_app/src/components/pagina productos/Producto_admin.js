import React from "react";
import './producto.css'

function Producto({id, title, type, filename, price}){
    const cargarImagen = require.context("../../data/imagen_productos", true);
    return (
        <div className="producto">
            <div className="product__info">
                <p>{title}</p>
                <p>{type}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img className="producto__img" src={cargarImagen(`./${ filename }`)} alt={filename} />
            <button>Editar categoria</button>
        </div>
    )
}

export default Producto;