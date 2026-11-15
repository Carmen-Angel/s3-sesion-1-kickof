//Arrays
const duraciones = [95, 120, 45, 180, 62, 150, 88, 210, 73, 140]

/*console.log("Duraciones de películas en minutos", duraciones)

console.log("Elementos que tiene el array" , duraciones.length)

console.log("Acceso al elemento 1", duraciones[0])

for (let i =0; i < duraciones.length; i++){
    console.log(`Duración de la película ${i + 1}: ${duraciones[i]}`)
}

//Condicionales
const duracionPeliculas = 119 // minutos

if (duracionPeliculas < 90){
    console.log("Película corta")
}else if (duracionPeliculas <= 120){
    console.log("Película estándar")
}else{
    console.log("Película larga")
}*/

//bucles y condicionales
/*let cortas = 0
let normales = 0
let larga = 0

for(let i = 0; i < duraciones.length; i++) {
    if(duraciones[i] < 90){
        cortas++
        console.log(`${duraciones[i]} es una peli corta`)
    }else if (duraciones[i] <=120){
        normales++
        console.log(`${duraciones[i]} es una peli normal`)
    }else{
        larga++
        console.log(`${duraciones[i]} es una peli larga`)
    }
}

console.log(`Cortas: ${cortas} - Normales: ${normales} - Largas: ${larga}`)*/

//OBJETOS
/*const pelicula = {
    titulo:"Origen",
    fecha: 2010,
    rating: 8.8,
    disponible: true,
}

console.log(pelicula)

console.log(pelicula.titulo)
console.log(pelicula["fecha"])// se usan si hay espacios en la clave

//modificar propiedades
pelicula.rating = 9.0
console.log(pelicula)

//añadir propiedades nuevas
pelicula.director = "Christopher Nolan"
console.log(pelicula)*/

//un array de objetos
const peliculas = [
    {
    titulo:"Origen",
    fecha: 2010,
    genero: "Ciencia Ficción",
    rating: 8.8,
    disponible: true,
    },
    {
    titulo:"Parasitos",
    fecha: 2019,
    genero: "Drama",
    rating: 8.6,
    disponible: true,
    },
    {
    titulo:"El faro",
    fecha: 2019,
    genero: "Terror",
    rating: 7.5,
    disponible: false,
    },
    {
    titulo:"Dune",
    fecha: 2021,
    genero: "Ciencia Ficción",
    rating: 8.0,
    disponible: true,
    },
    {
    titulo:"La Pianista",
    fecha: 2001,
    genero: "Drama",
    rating: 7.2,
    disponible: false,
    },
    {
    titulo:"Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
    },
]

/*for(let i = 0; i <peliculas.length; i++){
    const pelicula= peliculas[i]
    if (pelicula.disponible){
        console.log(`[${pelicula.fecha}] ${pelicula.titulo} - Género: ${pelicula.genero} - Rating: ${pelicula.rating}`, )
    } else{
        console.log(`[${pelicula.fecha}] ${pelicula.titulo} - NO DISPONIBLE`)
    }
}*/

/*for(let i = 0; i <peliculas.length; i++){
    const pelicula= peliculas[i]
    if (pelicula.disponible && pelicula.rating >= 8.0){
        console.log(`Recomendada: ${pelicula.titulo} (${pelicula.rating})`)
    }
    
    if (pelicula.genero === 'Terror' || pelicula.genero === 'Ciencia Ficción'){
        console.log(`Genero Top: ${pelicula.titulo} -  ${pelicula.genero}`)
    }

    if(!pelicula.disponible){
        console.log(`Peliculas no disponible. Proximamente: ${pelicula.titulo}`)
    }
}*/

//FUNCIONES
/*function sumarPrecios(precio1, precio2){
    const resultado =  precio1 + precio2
    return resultado
}

console.log(sumarPrecios(25.36, 61.2))

function restarPrecios(precio1, precio2){
    const resultado =  precio1 - precio2
    return resultado
}

console.log(restarPrecios(50, 25))*/

function formatearTitulo(titulo){
    const tituloMayus = titulo.toUpperCase()
    const tituloFormateado = `*** ${tituloMayus} ***`
    return tituloFormateado
}

/*console.log(formatearTitulo("Carmen"))*/

for(let i = 0; i <peliculas.length; i++){
    console.log(formatearTitulo(peliculas[i].titulo))
}

function obtenerPelisDisponibles(listaPelis){
    const disponibles = []

    for(let i = 0; i < listaPelis.length; i++){
        if(listaPelis[i].disponible){
            disponibles.push(listaPelis[i].titulo)
        }
    }
    return disponibles
}

const peliculas2 = [
    {
        titulo: "Midsommar",
        fecha: 2019,
        genero: "Terror",
        rating: 7.1,
        disponible: true,
    },
    {
        titulo: "Dune: Parte Dos",
        fecha: 2024,
        genero: "Ciencia Ficción",
        rating: 8.5,
        disponible: true,
    },
    {
        titulo: "Parásitos",
        fecha: 2019,
        genero: "Thriller",
        rating: 8.5,
        disponible: false,
    },
    {
        titulo: "El Caballero Oscuro",
        fecha: 2008,
        genero: "Acción",
        rating: 9.0,
        disponible: true,
    },
    {
        titulo: "La La Land",
        fecha: 2016,
        genero: "Musical",
        rating: 8.0,
        disponible: false,
    }
];

console.log(obtenerPelisDisponibles(peliculas))
console.log(obtenerPelisDisponibles(peliculas2))
