import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { Outlet, Link } from "react-router-dom";

function Login({ correos, setCorreo }) {
    const correct = {
        border: 'solid 1px #84CEC2',
        opacyti: 0

    }
    const incorrect = {
        border: 'solid 1px #ff00004b',
        opacity: 1
    }
    const [user, setUser] = useState([0])
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState()
    const [contraseña, setContraseña] = useState()
    const [registraremail, setRegistrarEmail] = useState()
    const [registrarcontraseña, setRegistrarContraseña] = useState()
    const [stylePasword, setStylePasword] = useState(correct)
    const [styleCorreo, setStyleCorreo] = useState(correct)
    const [styleCorreoRegistrar, setStyleCorreoRegistrar] = useState(correct)


    function RegistrarEmail(e) {
        setRegistrarEmail(e.target.value);


        if (e.target.value == "") {
            setStyleCorreoRegistrar(correct)

        } else {
            setStyleCorreoRegistrar(incorrect)

        }
        if (e.target.value.includes("@") == true) {
            if (e.target.value.includes(".") == true) {
                setStyleCorreoRegistrar(correct)

            } else {
                setStyleCorreoRegistrar(incorrect)

            }
        }



    }
    function RegistrarContraseña(e) {
        setRegistrarContraseña(e.target.value);
    }
    function RegistrarLogin() {

        var user = []
        console.log(registrarcontraseña, registraremail)
        correos.push({ email: registraremail, password: registrarcontraseña })
        setCorreo(correos)
        setOpen(false)
    }


















    function EmailChange(e) {

        setCorreo(correos)
        setEmail(e.target.value);
        if (e.target.value == '') {
            setStyleCorreo(correct)

        }
        setUser(correos.find(element => element.email == email));
    }
    function ContraseñaChange(e) {
        setCorreo(correos)
        if (e.target.value == '') {
            setStylePasword(correct)

        }
        setContraseña(e.target.value);
        setUser(correos.find(element => element.email == email));
    }
    function BuscarLogin() {
        setCorreo(correos)
        if (correos.map((user) => user.email).includes(email)) {
            setStylePasword(correct)

        } else {
            setStyleCorreo(incorrect)

        }
        if (email == undefined || email == "") {
            setStyleCorreo(incorrect)

        }


        if (user.password == contraseña) {

            if (user.password != undefined) {


                setStylePasword(correct)
                document.getElementById('LinkMenu').click();
            }

        } else {

            setStylePasword(incorrect)

        }


        if (user.email == email) {

        } else {
            setStyleCorreo(incorrect)

        }


    }
    return (
        <div className="Login">
            <div className="LoginContainer">
                <div className="LoginPortada">
                    <div className="LoginPortadaImage">

                    </div>
                </div>

                <div className="LoginInput">
                    <div className="LoginInputContainer">
                        <div className="LoginInputContainerInicio">

                            <div className='LoginLogo'>
                                <div className='LoginLogoImage'></div>
                            </div>
                            <div className="LoginInputContainerInicioTitle">
                                <h1>Iniciar Sesión</h1>
                                <div>
                                    <Offcanvas direction="end" isOpen={open} >
                                        <OffcanvasHeader toggle={function noRefCheck() { setOpen(false) }}>
                                            <p className="RegistrarseTitle" >Registrate en Steady</p>
                                        </OffcanvasHeader>
                                        <OffcanvasBody>
                                            <div className="LoginInputContainerInicioInputs Center">
                                                <div className="LoginInputContainerInicioInputsCorreo">
                                                    <h5>Ingresa tu Correo</h5>

                                                    <input pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" onChange={RegistrarEmail} id='emailregistro' type="email" placeholder='Correo' pattern=".+@globex\.com" required />
                                                    <p style={{ opacity: styleCorreoRegistrar.opacity }}>El correo debe incluir (@) y formato '.com'</p>

                                                </div>
                                                <div className="LoginInputContainerInicioInputsClave">
                                                    <h5>Ingresa una Contraseña</h5>

                                                    <input onChange={RegistrarContraseña} type="password" placeholder='Contraseña' />
                                                    <h5>Repite la contraseña</h5>
                                                    <input onChange={RegistrarContraseña} type="password" placeholder='Contraseña' />
                                                </div>
                                                <div className="LoginInputContainerInicioButtumInicio">
                                                    <button onClick={RegistrarLogin} type="submit" className="InicioButton">Registrarse</button>
                                                </div>
                                            </div>
                                        </OffcanvasBody>
                                    </Offcanvas>
                                </div>
                                <h2>Inicia sesión para completar tu pedido y comprar miles de productos.</h2>
                            </div>
                            <div className="LoginInputContainerInicioBack">
                                <div className="LoginInputContainerInicioBackLine"></div>
                                <div className="LoginInputContainerInicioBackTitle">
                                    <h3>inicie sesión a continuacion</h3>
                                </div>
                                <div className="LoginInputContainerInicioBackLine"></div>
                            </div>
                            <div className="LoginInputContainerInicioInputs">
                                <div className="LoginInputContainerInicioInputsCorreo">
                                    <input onFocus={EmailChange} style={{ border: styleCorreo.border }} onChange={EmailChange} id='emaill' type="email" placeholder='Correo' pattern=".+@globex\.com" required />
                                    <p style={{ opacity: styleCorreo.opacity }}>Ingrese un Correo Valido</p>
                                </div>
                                <div className="LoginInputContainerInicioInputsClave">
                                    <input onFocus={ContraseñaChange} style={{ border: stylePasword.border }} onChange={ContraseñaChange} type="password" placeholder='Contraseña' />
                                    <p style={{ opacity: stylePasword.opacity }}>Contraseña invalida</p>

                                </div>
                            </div>
                            <Link id='LinkMenu' to="/menu"></Link>
                            <div className="LoginInputContainerInicioButtumInicio">
                                <button onClick={BuscarLogin} type="submit" className="InicioButton">Iniciar</button>
                            </div>
                            <div className="LoginInputContainerInicioCrearCuenta">
                                <p onClick={function noRefCheck() { setOpen(true) }} >Registrarse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
