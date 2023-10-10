import { useEffect, useState } from 'react'
import { generarId } from '../helpers/idGenerator'
import { guardarEnLS } from '../helpers/guardarEnLS'


export const Crear = ({setPeliculas}) => {

    const [pelicula, setPelicula] = useState({ id:'', titulo: '', descripcion: '' })
    const onChange = e => setPelicula({
        ...pelicula,
        [e.target.name]: e.target.value
    })
    const {titulo, descripcion} = pelicula
    
    const onSubmit = e => {
        e.preventDefault()
       setPelicula({...pelicula, id: generarId()})

        if([titulo, descripcion].includes('')) {
            alert('Todos los campos son obligatorios')
            return
        }
        setPeliculas( peliculas => [pelicula, ...peliculas])
        guardarEnLS('peliculas', pelicula)
    }

    useEffect(() => {setPelicula({...pelicula, id: generarId()})}, [])
    
    
    return (
        <>
            <h3 className="title">Añadir pelicula</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    id="titulo"
                    name='titulo'
                    placeholder="Titulo"
                    onChange={onChange}
                    value={titulo}
                />
                <textarea
                    id="description"
                    placeholder="Descripción"
                    name='descripcion'
                    onChange={onChange}
                    value={descripcion}
                ></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar"
                />
            </form>
        </>
    )
}
