// function saludar(xyz) {
//     return `hola ${xyz}`
// }


// const saludar = function(xyz) {
//     return `Hola: ${xyz}`
// }

const saludar = (nombre = 'Peter') => `Hola: ${nombre}`


//const nombre = 'Luisga'

//console.log(saludar())

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
})


//console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman'
}, {
    id: 2,
    name: 'Superman'
}]