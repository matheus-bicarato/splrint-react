import { Link } from "react-router-dom";
import logo from '../assets/Hea.png'
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav className="nav-cima">
                <ul>
                    <Link to={"/"}><li>Fale Conosco</li></Link>
                    |
                    <Link to={"/"}><li>Atendimento por e-mail</li></Link>
                    |
                    <Link to={"/"}><li>Nossas Lojas</li></Link>
                    |
                    <Link to={"/"}><li>Acompanhe seu pedido</li></Link>
                </ul>
                <div className="icon-perfil">
                    <i classNames="bi bi-person-fill perfil"></i>
                    <p className="">Olá, Bem vindo! <br /> <Link><span>Entre</span></Link> ou <Link><span>Cadastre-se</span></Link> Aqui</p>
                </div>
            </nav>
            <hr />
            <nav className="nav-baixo">
                <img className="logo" src={logo} alt="logo" />

                    <div classNames="container-fluid">
                        <form>
                            <input className="search" type="search" placeholder="Procure aqui! " />
                        </form>
                    </div>
                    <i className="bi bi-basket carrinho"></i>
            </nav>
        </header>
    )
}

export default Header;