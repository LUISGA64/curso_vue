import superHeroes from '../data/heroes'

const [id, name, owner] = superHeroes

/*superHeroes.forEach(h => {
    console.log(h)
})*/

/*const getHeroById = superHeroes.find(heroe => {
    return heroe.id === 2
})*/

/*const getHeroById = (id) => {
    return superHeroes.find(hero => hero.id === id)
}*/

//funciona y se resume
export const getHeroById = (id) => superHeroes.find(hero => hero.id === id)


/*const getHeroByOwner = superHeroes.filter(heroe => {
    return heroe.owner === 'DC'
})*/


export const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)