const miPromesa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {
    console.log('Inicio')


    console.log('Fin')
}

medirTiempoAsync()