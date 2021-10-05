import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import Almacen from '../src/pages/Almacen'
import Pedidos from '../src/pages/Pedidos'
import Productos from '../src/pages/Productos'
import Reservas from '../src/pages/Reservas'
import Valoraciones from '../src/pages/Valoraciones/Valoraciones'
import './App.scss';


function App() {
  return (
    <Router>
      <Navbar />
<div className="flex">
      <Sidebar />
<div className="content">
<Route path="/almacen" exact={true} component={Almacen} />
<Route path="/pedidos" exact={true} component={Pedidos} />
<Route path="/productos" exact={true} component={Productos} />
<Route path="/reservas" exact={true} component={Reservas} />
<Route path="/valoraciones" exact={true} component={Valoraciones} />
</div>
</div>
    </Router>
  );
}

export default App;
