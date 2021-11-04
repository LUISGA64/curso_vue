const apiKey = '86TvVw7QN7sZAsHmtWLIhlZg2PuiFVlf'
    //https://api.giphy.com/v1/gifs/random?api_key=86TvVw7QN7sZAsHmtWLIhlZg2PuiFVlf

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })