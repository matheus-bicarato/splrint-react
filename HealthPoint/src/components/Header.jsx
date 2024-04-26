import { Link } from "react-router-dom";
import logo from '../assets/Hea.jpg'
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to={"/"}><li>Fale Conosco</li></Link>
                    |
                    <Link to={"/"}><li>Atendimento por e-mail</li></Link>
                    |
                    <Link to={"/"}><li>Nossas Lojas</li></Link>
                    |
                    <Link to={"/"}><li>Acompanhe seu pedido</li></Link>
                    |
                    <div className="icon-perfil">
                        <i class="bi bi-person-fill perfil"></i>
                        <p className="">Olá, Bem vindo! <br /> <Link><span>Entre</span></Link> ou <Link><span>Cadastre-se</span></Link> Aqui</p>
                    </div>
                    
                </ul>
                <hr />
            </nav>

        </header>
    )
}

export default Header;