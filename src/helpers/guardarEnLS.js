export const guardarEnLS = (clave, pelicula) => {
    let elementos = JSON.parse( localStorage.getItem('peliculas'))

    if(Array.isArray(elementos)) {
        elementos.push(pelicula)
    }else {
        elementos = [pelicula]
    }

    localStorage.setItem( clave, JSON.stringify(elementos))
    return pelicula
}