import './MenuElementsCards.scss';
import MenuElementsCard from './MenuElementsCard/MenuElementsCard.jsx';
import { React, useState, useEffect } from 'react';

function MenuElementsCards({ cardBusquedaMap, setCardBusquedaMap, setTotal, total, user, productocarrito, setProductoCarrito }) {
    const [card, setCard] = useState([])

    useEffect(() => {
        if (cardBusquedaMap != '' && cardBusquedaMap != undefined) {
            setCard(cardBusquedaMap)
        }

    }, [cardBusquedaMap]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${user.value}`)
            .then(response => response.json())
            .then(data => {
                setCard(data)
            });

    }, [user]);
    return (

        <div className="MenuElementsCardsContainer">
            <div className="MenuElementsCardsContainerTitle">
                <div className="MenuElementsCardsContainerTitleH2">
                    <h2>{user.nombre}</h2>
                </div>
                <div className="MenuElementsCardsContainerTitleLine">
                    <div className="MenuElementsCardsContainerTitleLineContent">

                    </div>
                </div>
            </div>
            <div className="MenuElementsCardsContainerContenedor">

                {card.map((producto) => <MenuElementsCard total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} producto={producto} />)}

            </div>
        </div>
    );
}

export default MenuElementsCards;