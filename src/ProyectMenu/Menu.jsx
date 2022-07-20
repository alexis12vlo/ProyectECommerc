import './Menu.scss';
import { React, useState, useEffect } from 'react';
import Nav from './ProyectMenuElements/Nav/Nav'
import MenuElements from './ProyectMenuElements/MenuElements/MenuElements';

function Menu() {
    const [productocarrito, setProductoCarrito] = useState([])
    const [total, setTotal] = useState(0)
    
    return (

        <div className="Menu">
            <div className="MenuContainer">
                <div className="NavContainer">
                    <Nav  total={total} setTotal={setTotal}  productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} />
                </div>
                <div className="MenuElementsContainer">
                    <MenuElements total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} />
                </div>
            </div>
        </div>
    );
}

export default Menu;