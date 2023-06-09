import React from "react";
import CFElogo from "../img/cfelogo.png";

const SignUp = () => {
   


return (
<div className="formContainer">
<div className="formWrapper">
<span className="logo"> <img src={CFElogo} alt=""/>  </span>
<span className="titleforAcc"> Registro de cuenta </span>
<form>
<input required type="text" placeholder="Nombre" />
<input required type="email" placeholder="Correo electrónico" />
<input required type="emailconf" placeholder="Confirmar correo electrónico" />
<input required type="password" placeholder="Contraseña" />
<button>Regístrate</button>
</form>
</div>
</div>
);
}
export default SignUp