'use strict';

function getDogImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            if (!response.ok) { throw new Error() };
        
            return response.json()
        })
        .then(responseJSON => {
            $('.dogImageContainer')
            .html(
                `<img src="${responseJSON.message}" class='dogImage'>`
            )
            .removeClass('hidden');
        })
        .catch(error => {
            error.json().then(res => {
                $('.dogImageContainer').html(`<p>${res.message}</p>`)
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