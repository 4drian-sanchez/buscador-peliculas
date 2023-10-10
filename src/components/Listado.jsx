import { useState } from "react"
import Editar from "./Editar"

export const Listado = ({ peliculas, setPeliculas }) => {

    const [editar, setEditar] = useState(0)
    
    const eliminarPelicula = id =>  {
        const peliculasActualizadas = peliculas.filter( peliculaState => peliculaState.id !== id)
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas))
        setPeliculas(peliculasActualizadas)
    }

    return (
        <>
            {peliculas?.length
                ? (
                    peliculas.map(pelicula => (
                        <article className="peli-item" key={pelicula.id}>
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">{pelicula.descripcion}</p>

                            <button 
                                className="edit"
                                onClick={() => setEditar(pelicula.id)}
                                >Editar</button>
                            <button
                                className="delete"
                                onClick={() => eliminarPelicula(pelicula.id)}
                            >Borrar
                            </button>

                            {
                                editar === pelicula.id && (
                                    <Editar pelicula={pelicula} setPeliculas={setPeliculas}/>
                                )
                                
                            }
                        </article>
                    
                    ))
                )
                : <h2>No hay peliculas por ver</h2>
            }
        </>
    )
}
