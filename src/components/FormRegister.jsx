import '../assets/styles/formregister.css'
import logo from '../assets/img/logobus.jpg'

function FormRegister() {

    return (
        <form action="" method="post">

            <img src={logo}></img>

            <ul>
                <li>
                    <h1>Name</h1>
                    <input type="text" id="name" name="nameUsuario"></input>
                </li>
                <li>
                    <h1>Email</h1>
                    <input type="text" id="email" name="emailUsuario"></input>
                </li>
                <li>
                    <h1>Username</h1>
                    <input type="text" id="nombre" name="userUsuario"></input>
                </li>
                <li>
                    <h1>Password</h1>
                    <input type="text" id="pass" name="passwordUsuario"></input>
                </li>
                <li className="button">
                    <button type="summit">Registro</button>
                </li>
            </ul>
        </form>
    );
}

export default FormRegister;