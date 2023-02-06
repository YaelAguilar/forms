import { Link } from "react-router-dom";
import '../assets/styles/formlogin.css';
import logo from '../assets/img/logobus.jpg'

function FormLogin() {
    
    return (
        <form action="" method="post">

            <img src={logo}></img>

            <ul>
                <li>
                    <h1>Username</h1>
                    <input type="text" id="nombre" name="nombreUsuario"></input>
                </li>
                <li>
                    <h1>Password</h1>
                    <input type="text" id="pass" name="passwordUsuario"></input>
                </li>
                <li className="button">
                    <button type="summit">Iniciar sesión</button>
                </li>
                <li>
                <Link to="/register">No tienes cuenta, regístrate</Link>
                </li>
            </ul>
        </form>
    );
}

export default FormLogin;