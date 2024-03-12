import { Link } from "react-router-dom";
import LogoGG from "../assets/gigames.png";

const Logo = ({tamanio}) => {
    return (
        <Link to={"/"}>
            <img src={LogoGG} alt="Logo de GiGames" className="logo" width={tamanio} />
        </Link>
    )
}

export default Logo;