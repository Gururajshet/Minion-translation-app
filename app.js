'use strict'

const textArea = document.getElementById('text__area');
const buttonClick = document.getElementById('btn');
const translatedArea = document.getElementById('block');

const url = "https://api.funtranslations.com/translate/minion.json";





function updatedUrl(url) {
    return `${url}?text=${textArea.value}`
}

function translated() {
    fetch(updatedUrl(url))
        .then(Response => Response.json()
            .then(json => translatedArea.innerText =json.contents.translated))
}

buttonClick.addEventListener('click',translated)
