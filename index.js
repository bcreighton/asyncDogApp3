'use strict';

function getDogImages(breed, dogs){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${dogs}`)
        .then(response => response.json())
        .then(responseJSON => {
            if(responseJSON.status == 'error'){
                $('.dogImageContainer').replaceWith(
                    `<p>${breed} does not exist; please refresh the page and try again.</p>`
                 )
            } else {
                const dogImages = responseJSON.message;

                for(let i=0; i<dogImages.length; i++){
                $('.dogImageContainer').append(
                    `<img src="${dogImages[i]}" class='dogImage'>`
                    )
                }
            }
        })
        .then($('.dogImageContainer').removeClass('hidden'))
        .catch(error => console.log('An error has occured; please try again.'))
}

function formListener(){
    $('form').submit(event => {
        event.preventDefault();

        const dogBreed = $('#breed').val();
        const numberOfDogs = $('#dogs').val();
        getDogImages(dogBreed, numberOfDogs);
    });
}

$(function() {
    formListener();
})