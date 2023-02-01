const CARD = document.getElementById('div-nasa');
const ZOOM = document.getElementById('foto-grande');
ZOOM.style.display = 'none'

const resNasa = async ()=>{
    try{
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=rF7vbgi86OEdn4j7aVureGB8bDzcO5Y7dDhWrQ7E`)
        const data = await res.json()

        CARD.innerHTML =
        `
            <img src="${data.url}" onclick="toggle()" alt="imagem do dia NASA">
            <p>${data.date}</p>
            <h2>${data.title}</h1>
            <p class="description">${data.explanation}</p>
            <p>Autor: ${data.copyright}</p>
        `
        ZOOM.innerHTML =
        `
            <p onclick="toggle()">Voltar</p>
            <img src="${data.url}" alt="imagem do dia NASA">
        `

    }catch(erro){
        alert('NASA API fora do ar.')
        console.log(erro)
    }    
}

resNasa()

function toggle(){
    ZOOM.style.display == 'none' ? ZOOM.style.display = 'flex' : ZOOM.style.display = 'none'
}