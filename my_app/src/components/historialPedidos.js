import React from 'react'
import data from '../data/pedidos';

const compareDates = (a, b) => {
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
};

const HistorialPedidos = () => {
    const listItems = data.sort(compareDates).map((item) =>{
        return(<div className='pedidoLista' key={item.id}>
            <div className='fila-historial'>
                <div className='txt-historial'>
                    Pedido realizado el {item.createdAt} 
                </div>
                <div className='txt-historial'>
                    Precio total: ${Math.round(item.precioFinal*100)/100} 
                </div>
                <div className='txt-historial'>
                    <button>Ver detalle</button> 
                </div> 
            </div>
        </div>)
    });
    return(
        <div className='historialPedidos'>
            {listItems}
        </div>
    )
};

export default HistorialPedidos;