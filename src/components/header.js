
export function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav justify-content-around w-100 align-items-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color"><h3>Quienes Somos</h3></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color"><h3>Productos</h3></span></a>
                    </li>
                    <h1 className="title display-1">Vegani</h1>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color"><h3>Puntos de Venta</h3></span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><span className="text-color"><h3>Contacto</h3></span></a>
                    </li>
                </ul>
        </nav>
    )
}