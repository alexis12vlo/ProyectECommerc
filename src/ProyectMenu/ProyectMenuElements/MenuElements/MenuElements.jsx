import './MenuElements.scss'
import { React, useState, Component, useEffect } from 'react';
import algoliasearch from 'algoliasearch';
import MenuElementsCard from './MenuElementsCards/MenuElementsCard/MenuElementsCard.jsx';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    connectHits,
    HierarchicalMenu,
    Panel,
    SortBy,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch(
    'WIDOMUDAKY',
    '63ad84ed366210b8d703e51cfcb70dbb'
);

function MenuElements({ total, setTotal, productocarrito, setProductoCarrito }) {
    const [categorias, setCategorias] = useState([{ value: 'electronics', nombre: "Electronica" }, { value: 'jewelery', nombre: "Joyeria" }, { value: "men's clothing", nombre: "Ropa de Hombre" }, { value: "women's clothing", nombre: "Ropa de Mujer" }])
    const [cardBusqueda, setCardBusqueda] = useState([])
    const [category, setcategory] = useState('')

    const [cardBusquedaMap, setCardBusquedaMap] = useState([])

    function Hit(producto) {
        return (
            <div>


                <div className="hit-description">
                    {producto.hit.title}
                </div>

            </div>
        );
    }




    const Hits = ({ hits }) => (
        <div className="HitsContainer">
            {hits.map(hit => (
                <MenuElementsCard key={hit.id} total={total} setTotal={setTotal} productocarrito={productocarrito} setProductoCarrito={setProductoCarrito} producto={hit} />
            ))}
        </div>
    );

    const CustomHits = connectHits(Hits);

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
        <InstantSearch indexName="steadyy_index" searchClient={searchClient}>

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

                                <SearchBox
                                    defaultRefinement={category}
                                    translations={{

                                        placeholder: 'Buscar un Producto',
                                    }} />


                                <button onClick={() => { setcategory('') }}>Todos</button>
                                <button onClick={() => { setcategory("men's clothing") }}>Ropa de Hombre</button>
                                <button onClick={() => { setcategory("women's clothing") }}>Ropa de Mujer</button>
                                <button onClick={() => { setcategory("jewelery") }}>Joyería</button>
                                <button onClick={() => { setcategory("electronics") }}>Electronica</button>
                            </div>
                        </div>
                    </div>
                    <div className="MenuElementsNuestrosContainerProducts">
                        <CustomHits className="CustomHitsContainer" />
                    </div>
                </div>
            </div>
        </InstantSearch>

    )
}
export default MenuElements;