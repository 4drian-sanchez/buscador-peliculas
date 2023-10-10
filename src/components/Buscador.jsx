import { useState } from "react"

export const Buscador = ({ peliculas, setPeliculas }) => {

    const [busqueda, setBusqueda] = useState('')
    const [alerta, setAlerta] = useState(false)

    const onChange = e => {
        setBusqueda(e.target.value)

        let peliculasEncontradas = peliculas.filter(peli => {
            return peli.titulo.toLowerCase().includes( busqueda.toLocaleLowerCase() )
        })

        if(busqueda.length <= 1 || peliculasEncontradas.length <= 0) {
            peliculasEncontradas = JSON.parse(localStorage.getItem('peliculas'))
            setAlerta(true)
            return
        }

        setAlerta(false)
        setPeliculas(peliculasEncontradas)
    }

    return (
        <>
            <h3 className="title">Buscador</h3>
            <form>
                <span className="no-encontrado">
                    { (alerta && alerta.length > 1) && "Pelicula no encontrada"}
                </span>
                <input
                    type="text"
                    id="search_field"
                    onChange={onChange}
                    value={busqueda}
                />
                <button id="search">Buscar</button>
            </form>
        </>
    )
}
