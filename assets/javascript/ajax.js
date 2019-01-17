// GIPHY API key: KhYgqTlp6zKKgwSZRM66bvMXcRJIm070

// q - search query term or phrase 
// limit - (optional) number of results to return, maximum 100. Default 25.
// rating - limit results to those rated (y,g, pg, pg-13 or r).

// $('document').ready(function() {

// Array of search terms
let arrayOfBabyAnimals = [
    'puppy',
    'kitten',
    'duckling',
    'chick',
    'bear cub',
    'cub',
    'lion cub',
    'tiget cub',
    'piglet',
    'baby hamster',
    'baby bunny',
    'baby elephant',
    'calf',
    'baby horse',
    'lamb',
    'baby bird',
    'baby goat',
    'baby panda'
]

// Require with custom API key
var giphy = require('giphy-api')('KhYgqTlp6zKKgwSZRM66bvMXcRJIm070');

const queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
;

const gifArray = response.Search;


});

// )};