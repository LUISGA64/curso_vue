import axios from "axios"

const apiKey = '86TvVw7QN7sZAsHmtWLIhlZg2PuiFVlf'
    //https://api.giphy.com/v1/gifs/random?api_key=86TvVw7QN7sZAsHmtWLIhlZg2PuiFVlf


const giphyApy = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

// giphyApy.get('/random').then(resp => {

//     //desestructurar es la solución
//     const { data } = resp.data
//     const { url } = data.images.original

//     //crear el elemento en la pantalla
//     const img = document.createElement('img')
//     img.src = url

//     document.body.append(img)
// })