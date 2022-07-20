import './MenuElementsCard.scss';
import { React, useState, useEffect } from 'react';
import { AiTwotoneStar } from 'react-icons/ai'
import {
    Button, UncontrolledPopover, PopoverHeader, PopoverBody
} from 'reactstrap';
var suma = 0
function MenuElementsCard({ total, setTotal, productocarrito, setProductoCarrito, producto }) {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador

        if (productocarrito.length != 0) {
            console.log(productocarrito)
            var suma = 0
            productocarrito.map((user) => { suma = suma + user.price })
            setTotal(suma)
        }


    }, [productocarrito]);

    function Agregar() {
        if (productocarrito.includes(producto) == false) {


            setProductoCarrito([...productocarrito, producto])
            console.log(productocarrito)


        }



    }
    return (

        <div className="MenuElementsCardContainer">
            <div style={{ backgroundImage: `url(${producto.image})` }} className="MenuElementsCardContainerImage">
                <div className="MenuElementsCardContainerImageContainer">
                    <div style={{ opacity: opacity }} className="MenuElementsCardContainerImageInfo">
                        {producto.description}
                    </div>
                    <button id="Info" onClick={() => { setOpacity(opacity == 0 ? 1 : 0) }}>Mas Info</button>

                    <button onClick={Agregar} >Agregar a Carrito</button>
                </div>
            </div>
            <div className="MenuElementsCardContainerDescription">
                <div className="MenuElementsCardContainerDescriptionContainer">
                    <div className="MenuElementsCardContainerDescriptionContainerTitle">
                        <div className="MenuElementsCardContainerDescriptionContainerTitleH2">
                            <h2>{producto.title}</h2>
                        </div>
                        <div className="MenuElementsCardContainerDescriptionContainerTitlePrecio">
                            <p>${producto.price}</p>
                        </div>
                    </div>
                    <div className="MenuElementsCardContainerDescriptionContainerEstrellas">
                        <div className="MenuElementsCardContainerDescriptionContainerEstrellasIcons">
                            <div>
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                                <AiTwotoneStar />
                            </div>
                        </div>
                        <div className="MenuElementsCardContainerDescriptionContainerRewies">
                            <div className="MenuElementsCardContainerDescriptionContainerRewiesContainer">

                                <p>{producto.rating.count} Reviews</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MenuElementsCard;