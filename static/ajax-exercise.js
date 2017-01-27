"use strict";


// PART 1: SHOW A FORTUNE

function getFortune(){
    $.get('/fortune', showFortune);
}

function showFortune(results) {

    // TODO: get the fortune and show it in the #fortune-text div
    var fortune = results;
    $("#fortune-text").html(fortune);
}


$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

    // TODO: request weather with that URL and show the forecast in #weather-info



$("#weather-form").on('submit', showWeather);


function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url,displayWeather);
}

function displayWeather(result) {
    //{'forecast': 'Warm, balmy, and good for sunbathing.', 'temp': '100F'}
    $('#weather-info').html(result.forecast);
}




// PART 3: ORDER MELONS
// TODO: show the result message after your form
// TODO: if the result code is ERROR, make it show up in red (see our CSS!)
function orderMelons(evt) {
    evt.preventDefault();

    var orderInput = {
    'qty':$('#qty-field').val(),
    'melon_type':$('#melon-type-field').val()
    };

    $.post("/order-melons.json", orderInput, displayMessage);
    
}

function displayMessage(results){

    if (results.code == "ERROR") {
        $("#order-status").html(results.msg).addClass("order-error");
    } else {
        $("#order-status").html(results.msg);
        } 
}


$("#order-form").on('submit', orderMelons);


