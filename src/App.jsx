import { useEffect, useState } from 'react'
import { Buscador, Crear, Listado } from './components'

const App = () => {

    const [peliculas, setPeliculas] = useState([])
    
    useEffect( () => {
        setPeliculas( JSON.parse( localStorage.getItem('peliculas')))
    }, [])
    
  return (
    <div className="layout">

        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <section id="content" className="content">
            <Listado peliculas={peliculas} setPeliculas={setPeliculas}/>
        </section>

        <aside className="lateral">
            <div className="search">
                <Buscador peliculas={peliculas} setPeliculas={setPeliculas}/>
            </div>

            <div className="add">
                <Crear setPeliculas={setPeliculas}/>
            </div>
        </aside>

        <footer className="footer">
            &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

    </div>
  )
}

export default App