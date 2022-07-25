import './Menu.scss';
import { React, useState, useEffect } from 'react';
import Nav from './ProyectMenuElements/Nav/Nav'
import MenuElements from './ProyectMenuElements/MenuElements/MenuElements';
import MenuInfo from './ProyectMenuElements/MenuInfo/MenuInfo.jsx';
function Menu() {
    const [productocarrito, setProductoCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [productoInfo, setProductoInfo] = useState([])
    const [mostrarinfo, setMostrarInfo] = useState(false)
    const [category, setcategory] = useState('')

    useEffect(() => {
        setcategory(category)
    }, [])

    return (

        <div className="Menu">
            <div className="MenuContainer">
                <div className="NavContainer">
                    <Nav total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} />
                </div>
                <div className="MenuElementsContainer">
                    {mostrarinfo == false ? <MenuElements setcategory={setcategory} category={category} productoInfo={productoInfo} setProductoInfo={setProductoInfo} mostrarinfo={mostrarinfo} setMostrarInfo={setMostrarInfo} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} />
                        :

                        <MenuInfo total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} productoInfo={productoInfo} setProductoInfo={setProductoInfo} mostrarinfo={mostrarinfo} setMostrarInfo={setMostrarInfo} />

                    }

                </div>

            </div>
        </div>
    );
}

export default Menu;