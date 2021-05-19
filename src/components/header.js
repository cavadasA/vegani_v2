
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav justify-content-around w-100 align-items-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color">Quienes Somos</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color">Productos</span></a>
                    </li>
                    <h1 className="title display-1">Vegani</h1>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color">Puntos de Venta</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color">Contacto</span></a>
                    </li>
                </ul>
        </nav>
    )
}