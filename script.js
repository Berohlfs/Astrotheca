
function carregar() {
    let xhr = new XMLHttpRequest();


    xhr.onload = function () {

        let data = JSON.parse(this.responseText);

        let nasaFOTD =
            `
            <img src="${data.url}" alt="imagem do dia NASA">
            <p class="data_">${data.date}</p>
            <h1 class="tit_">${data.title}</h1>
            <p class="expla">${data.explanation}</p>
            <p class="cr_">Autor: ${data.copyright}</p>
            `;
        document.getElementById('nasa').innerHTML = nasaFOTD;
    }

    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=rF7vbgi86OEdn4j7aVureGB8bDzcO5Y7dDhWrQ7E');
    xhr.send();
}