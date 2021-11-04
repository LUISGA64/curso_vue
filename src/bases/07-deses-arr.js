const characters = ['Goku', 'Vegeta', 'Trunks']

const [g, v, t, goten = 'No tiene valor'] = characters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['ABC', 123])

console.log(letters, numbers)