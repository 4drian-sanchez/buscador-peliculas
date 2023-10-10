

const Editar = ({ pelicula, setPeliculas }) => {

    const handleSubmit = e => {
        e.preventDefault()
        const target = e.target
        let titulo = target.titulo.value
        let descripcion = target.descripcion.value
        let peliculas = JSON.parse(localStorage.getItem('peliculas'))

        const peliculasActualizada = peliculas.filter(peli => {
            if (peli.id === pelicula.id) {
                peli.titulo = titulo
                peli.descripcion = descripcion
            }
            return peli
        })

        setPeliculas(peliculasActualizada);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizada)) 
    }

    return (
        <div className="edit_form">
            <h3 className="title">Editar pelicula</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="titulo_editado"
                    defaultValue={pelicula.titulo}
                    name='titulo'
                />
                <textarea
                    name="descripcion"
                    defaultValue={pelicula.descripcion}
                    className="descripcion_editada"
                />

                <input
                    type="submit"
                    className="editar"
                    value={'Actualizar'}
                />
            </form>
        </div>
    )
}

export default Editar