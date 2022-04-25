import React, { useState, ChangeEvent } from "react";
import searchIcon from '../../data/imagenes/searchIcon.png';
import Producto from './Producto';
import data from '../../data/productos.json';
import './home.css';

function Home(){

    const [ search, setSearch ] = useState('');
    const [productos, setProductos ] = useState(data);

    const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
        setSearch( target.value );
    }

    const filtroProductos = (): Producto[] => {
        if( search.length === 0 )
            return productos;
        
        const filtrado = productos.filter( prod => prod.title.toLowerCase().includes( search.toLowerCase() ) );
        return filtrado;
    }

    return (
        <div className="home">
            <div className='header__search'>
                <input 
                    type="text" 
                    className='header__searchInput' 
                    placeholder="Buscar..."
                    value= { search }
                    onChange= { onSearchChange }/>
                <img className='header__searchIcon' src={searchIcon} alt="searchIcon" />
            </div>
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
    )
}

export default Home;