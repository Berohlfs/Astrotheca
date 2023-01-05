var card = document.getElementById('div-nasa');
var zoom = document.getElementById('foto-grande');
zoom.style.display = 'none';

function carregar() {

    let xhr = new XMLHttpRequest();

    xhr.onload = function () {

        let data = JSON.parse(this.responseText);

        card.innerHTML =
            `
            <img src="${data.url}" onclick="toggle()" alt="imagem do dia NASA">
            <p>${data.date}</p>
            <h2>${data.title}</h1>
            <p class="description">${data.explanation}</p>
            <p>Autor: ${data.copyright}</p>
            `;

        zoom.innerHTML =
            `
            <p onclick="toggle()">Voltar</p>
            <img src="${data.url}" alt="imagem do dia NASA">
            `;
    }

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=rF7vbgi86OEdn4j7aVureGB8bDzcO5Y7dDhWrQ7E');
    xhr.send();
}

function toggle(){
    if(zoom.style.display == 'none'){
        zoom.style.display = 'flex';
    }
    else{
        zoom.style.display = 'none';
    }
}