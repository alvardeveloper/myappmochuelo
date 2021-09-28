import { Link } from 'react-router-dom'
const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                <Link to="/productos">Productos</Link>
                </li>  
                <li>
                <Link to="/reservas">Reservaciones</Link>
                </li> 
                <li>
                <Link to="/pedidos">Pedidos</Link>
                </li> 
                <li>
                <Link to="/almacen">Almacen</Link>
                </li> 
                <li>
                <Link to="/valoraciones">Valoraciones</Link>
                </li>  
            </ul>
        </div>
    )
}
export default Sidebar