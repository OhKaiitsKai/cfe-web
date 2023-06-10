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
<input required type="passwordconf" placeholder="Confirmar contraseña" />
<button>Regístrate</button>
<p>¿Ya tienes una cuenta? Inicia sesión </p>
</form>
</div>
</div>
);
}
export default SignUp