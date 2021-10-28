const person = {
    name: 'Luis',
    age: 40,
    codeName: 'luisga',
    power: 'Ingenieria'
}

const { name, age, codeName, power = 'no tiene' } = person

//console.log(name)
//console.log(age)
//console.log(codeName)
//console.log(power)



const createHeroe = ({ name, age, codeName, power }) => ({
    id: 123,
    name,
    age,
    codeName,
    power
})



console.log(createHeroe(person))