import React from "react";
import CFElogo from "../img/cfelogo.png";

const LogIn = () => {   


    return (
    <div className="formContainer">
    <div className="formWrapper">
    <span className="logo"> <img src={CFElogo} alt=""/>  </span>
    <span className="titleforAcc"> Inicio de sesión </span>
    <form>
    <input required type="email" placeholder="Correo electrónico" />
    <input required type="password" placeholder="Contraseña" />
    <button>Iniciar sesión</button>
    <p>¿No tienes una cuenta? Regístrate aquí </p>
    </form>
    </div>
    </div>
    );
    }
    export default LogIn