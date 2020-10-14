"use strict";

function getDogImage(userBreed) {
        fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch (error => alert("Technical difficulties.  Please try again later!"));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $(".results").html(`<img src=${responseJson.message}>`);
    $(".results").removeClass("hidden");
}

function watchForm() {
    $("#dog-number-form").submit(e => {
        e.preventDefault();
        let userBreed = $(`#dog-number-user`).val();
        getDogImage(userBreed.toLowerCase());
    });
}

$(function () {
    console.log('App is alive, waiting for input!');
    watchForm();
});