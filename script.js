
function carregar() {
    let xhr = new XMLHttpRequest();


    xhr.onload = function () {

        let data = JSON.parse(this.responseText);

        document.getElementById('div-nasa').innerHTML =
            `
            <img src="${data.url}" alt="imagem do dia NASA">
            <p>${data.date}</p>
            <h1>${data.title}</h1>
            <p class="description">${data.explanation}</p>
            <p>Autor: ${data.copyright}</p>
            `;
    }

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=rF7vbgi86OEdn4j7aVureGB8bDzcO5Y7dDhWrQ7E');
    xhr.send();
}