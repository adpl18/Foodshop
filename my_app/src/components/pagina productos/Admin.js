import React, { useState, ChangeEvent } from "react";
import searchIcon from '../../data/imagenes/searchIcon.png';
import Producto from "./Producto_admin";
import data from '../../data/productos.json';
import data_categorias from '../../data/categorias.json';
import Categoria from './Categorias.js';
import './home.css';
import './admin.css'

function Admin(){

    const [ search, setSearch ] = useState('');
    const [productos, setProductos ] = useState(data);

    const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
        setSearch( target.value );
    }

    const filtroProductos = (): Producto[] => {
        if( search.length === 0 )
            return productos;
        
        const filtrado = productos.filter( prod => prod.type.toLowerCase().includes( search.toLowerCase() ) );
        return filtrado;
    }


    return (
        <section id="pantalla-dividida">
        <div className="izquierda">
            <div className='header__search'>
                <input 
                    type="text" 
                    className='header__searchInput' 
                    placeholder="Filtrar por categoria..."
                    value= { search }
                    onChange= { onSearchChange }/>
                <img className='header__searchIcon' src={searchIcon} alt="searchIcon" />
            </div>
            <br/>
            <h1>Categorias:</h1>
            <ul>
            {data_categorias.map((categoria, index) => {
                    return (
                        <Categoria
                        key = {index}
                        name= {categoria.name}/>
                        ); 
                    })}
            </ul>
            <button>Agregar categoria</button>
        </div>
        <div className="derecha">
            <div className="home">
            <div className="productos">
                {filtroProductos().map((producto, index) => {
                    return (
                        <Producto
                        key = {index}
                        id= {producto.id}
                        title= {producto.title}
                        price={producto.price}
                        type={producto.type}
                        filename={producto.filename}/>
                        ); 
                    })}
            </div>
        </div>
            </div>
        </section>
    )
}

export default Admin;