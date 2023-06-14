import React, {useState} from "react";
import CFElogo from "../img/cfelogo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db} from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Nombre = e.target[0].value;
        const email = e.target[1].value;
        const emailconf = e.target[2].value;
        const password = e.target[3].value;
        const passwordconf = e.target[4].value;

        if (email !== emailconf || password !== passwordconf) {
            setErr(true);
            return;
          }
    
        try {
          //Create user
          const res = await createUserWithEmailAndPassword(auth, email, password);
    
          //Update profile
          await updateProfile(res.user, {
            displayName: Nombre,
          });
    
          //create user on firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            Nombre,
            email,
          });
    
          //create empty user chats on firestore
          await setDoc(doc(db, "userInfo", res.user.uid), {});
    
          navigate("/");
        } catch (err) {
          console.log(err);
          setErr(true);
        }
      };

return (
<div className="formContainer">
<div className="formWrapper">
<span className="logo"> <img src={CFElogo} alt=""/>  </span>
<span className="titleforAcc"> Registro de cuenta </span>
<form onSubmit={handleSubmit}>
<input required type="text" placeholder="Nombre" />
<input required type="email" placeholder="Correo electrónico" />
<input required type="emailconf" placeholder="Confirmar correo electrónico" />
<input required type="password" placeholder="Contraseña" />
<input required type="password" placeholder="Confirmar contraseña" />
<button>Regístrate</button>
{err && <span>Algo salió mal</span>}
</form>
<p>
¿Ya tienes una cuenta?<Link to="/login">Inicia sesión</Link>
</p>
</div>
</div>
);
}
export default SignUp;