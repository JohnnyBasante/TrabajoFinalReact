
export async function getAllRickAndMorty (url) {
    return new Promise( (resolve, reject) => {
        fetch(url).then( res => res.json() ).then(  data => {resolve(data)}  )
    } )
}