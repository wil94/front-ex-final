//Seccion para hacer importaciones de las vistas
import Home from './Home/'
import Test from './Test/'
import Vehicles from './Vehicles/'
import SubTrademark from './SubTrademark/'
import Quotes from './Quotes/'

// Seccion que contruye el array para Router de REACT
const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
    { path: '/vehiculos', component: Vehicles },
    { path: '/marcas', component: SubTrademark },
    { path: '/quotes', component: Quotes }
]
export default routes