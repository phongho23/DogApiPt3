"use strict";

function getDogImage(userBreed) {
        fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
            .then(response => response.json())
            .then(responseJson => displayResults(responseJson))
            .catch (error => alert("Technical difficulties.  Please try again later!"));
}

function displayResults(responseJson) {
    console.log("displayResults ran");
    console.log(responseJson);
    if (responseJson.message === "Breed not found (master breed does not exist)"){
        console.log("displayResults notFound");
        alert("Breed Not Found!  Try again!");
    } else {
    console.log(responseJson.message);
    $(".results").html(`<img src=${responseJson.message}>`);
    $(".results").removeClass("hidden");
    }
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
