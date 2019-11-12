'use strict';

function getDogImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => {
            debugger;
            if (!res.ok) {
                //throw new Error(res)
                throw res;
            };

            return res.json();
        })
        .then(resJSON => {
            $('.dogImageContainer')
            .html(
                `<img src="${resJSON.message}" class='dogImage'>`
            )
            .removeClass('hidden');
        })
        .catch(error => {
            debugger;
            error.json().then(res => {
                $('.dogImageContainer').html(`<p>${res.message}; please try again.</p>`)
                .removeClass('hidden');
            })
        })
}

function formListener(){
    $('form').submit(event => {
        event.preventDefault();

        const dogBreed = $('#breed').val();
        getDogImages(dogBreed);
    });
}

$(function() {
    formListener();
})