import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import CFElogo from "../img/cfelogo.png";

const LogIn = () => {   
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };

    return (
    <div className="formContainer">
    <div className="formWrapper">
    <span className="logo"> <img src={CFElogo} alt=""/>  </span>
    <span className="titleforAcc"> Inicio de sesión </span>
    <form onSubmit={handleSubmit}>
    <input required type="email" placeholder="Correo electrónico" />
    <input required type="password" placeholder="Contraseña" />
    <button>Iniciar sesión</button>
    {err && <span>Algo salió mal</span>}
    </form>
    <p>¿No tienes una cuenta?<Link to="/signup">Regístrate aquí</Link> </p>
    </div>
    </div>
    );
    }
    export default LogIn