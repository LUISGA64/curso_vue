const persona = {
    nombre: 'Luis',
    apellido: 'Quira',
    edad: '40',
    direccion: {
        ciudad: 'Popayan',
        zip: 123456,
        lat: 14.2356,
        lng: 23.5541
    }
}

const persona2 = {...persona };
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)