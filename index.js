'use strict';

function getDogImages(dogs){
    fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
        .then(response => response.json())
        .then(responseJSON => {
            const dogImages = responseJSON.message;

            for(let i=0; i<dogImages.length; i++){
               $('.dogImageContainer').append(
                   `<img src="${dogImages[i]}" class='dogImage'>`
                )
            }
        })
        .catch(error => console.log('An error has occured; please try again.'));
        
        $('.dogImageContainer').removeClass('hidden');
}

function formListener(){
    $('form').submit(event => {
        event.preventDefault();

        const numberOfDogs = $('#dogs').val();
        getDogImages(numberOfDogs);
    });
}

$(function() {
    formListener();
})