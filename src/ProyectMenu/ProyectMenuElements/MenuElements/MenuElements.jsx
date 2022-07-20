import './MenuElements.scss'
import MenuElementsCards from './MenuElementsCards/MenuElementsCards.jsx';
import { React, useState, useEffect } from 'react';


function MenuElements({ total, setTotal, productocarrito, setProductoCarrito }) {
    const [categorias, setCategorias] = useState([{ value: 'electronics', nombre: "Electronica" }, { value: 'jewelery', nombre: "Joyeria" }, { value: "men's clothing", nombre: "Ropa de Hombre" }, { value: "women's clothing", nombre: "Ropa de Mujer" }])
    const [cardBusqueda, setCardBusqueda] = useState([])
    const [cardBusquedaMap, setCardBusquedaMap] = useState([])

    var es = []
    function BusquedaProducto(e) {
        console.log(e.target.value.toLowerCase());
        var total = []
        es = cardBusqueda.filter((filter) => {
            if (filter.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                return total.push(filter)
            }
        }
        )
        console.log(total)
        setCardBusquedaMap(total)
        if (e.target.value == '') {
            setCardBusquedaMap([])
        }
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
            .then(response => response.json())
            .then(data => {

                setCardBusqueda(data)
            });

    }, []);




    return (
        <div className="MenuElements">
            <div className="MenuElementsNuestrosProductos">
                <div className="MenuElementsNuestrosProductosContent">
                    <div className="MenuElementsNuestrosProductosContentH1">
                        <h1>Nuestros Productos</h1>
                    </div>
                    <div className="MenuElementsNuestrosProductosContentP">
                        <p>Crea tu propia rutina sin plástico</p>
                    </div>
                </div>
            </div>
            <div className="MenuElmentsNuestrosContainer">
                <div className="MenuElmentsNuestrosContainerColecciones">
                    <div className="MenuElmentsNuestrosContainerColeccionesContainer">
                        <div className="MenuElmentsNuestrosContainerColeccionesContainerH2">
                            <h2>Colecciones</h2>
                        </div>
                        <div className="MenuElmentsNuestrosContainerColeccionesContainerTodos">
                            <input onChange={BusquedaProducto} type="text" placeholder="Busca un Producto" className="BuscadorInput" />
                            <button onClick={() => { setCategorias([{ value: 'electronics', nombre: "Electronica" }, { value: 'jewelery', nombre: "Joyeria" }, { value: "men's clothing", nombre: "Ropa de Hombre" }, { value: "women's clothing", nombre: "Ropa de Mujer" }]) }}>Todos</button>
                            <button onClick={() => { setCategorias([{ value: "men's clothing", nombre: "Ropa de Hombre" }]) }}>Ropa de Hombre</button>
                            <button onClick={() => { setCategorias([{ value: "women's clothing", nombre: "Ropa de Mujer" }]) }}>Ropa de Mujer</button>
                            <button onClick={() => { setCategorias([{ value: "jewelery", nombre: "Joyeria" }]) }}>Joyería</button>
                            <button onClick={() => { setCategorias([{ value: "electronics", nombre: "Electronica" }]) }}>Electronica</button>
                        </div>
                    </div>
                </div>
                <div className="MenuElementsNuestrosContainerProducts">
                    {cardBusquedaMap.length == 0 ? <div className="MenuElementsNuestrosContainerProductsContainer">

                        {categorias.map((user) => <MenuElementsCards setCardBusqueda={setCardBusqueda} cardBusqueda={cardBusqueda} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} user={user} />)}

                    </div> :

                        <div className="MenuElementsNuestrosContainerProductsContainer">

                            <MenuElementsCards setCardBusquedaMap={setCardBusquedaMap} cardBusquedaMap={cardBusquedaMap} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} user={{ value: '', nombre: "Resultados" }} />

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default MenuElements;