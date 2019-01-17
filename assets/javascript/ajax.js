// GIPHY API key: KhYgqTlp6zKKgwSZRM66bvMXcRJIm070

// q - search query term or phrase 
// limit - (optional) number of results to return, maximum 100. Default 25.
// rating - limit results to those rated (y,g, pg, pg-13 or r).

$('document').ready(function() {

    // Array of search terms
    var topics = [
        'puppy',
        'kitten',
        'coffee',
        'latte',
        'espresso',
        'painting',
        'art',
        'plants',
        'houseplant',
        'coding'
    ]

    // Require with custom API key
    var giphy = require('giphy-api')('KhYgqTlp6zKKgwSZRM66bvMXcRJIm070');

    var queryURL = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=10");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    ;

    // Your app should take the topics in this array and create buttons in your HTML.
    var topics = response.Search;

    // Try using a loop that appends a button for each string in the array.
    for (i = 0; i < topics.length; i ++) {
        var buttonDiv = $('#buttons');
        var btn = $('<button>').text(response.Search); // Not sure if this should be "Search"
    }

    btn.append(response.Search);
    buttonDiv.append(btn);
    
    // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

    // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

    // Under every gif, display its rating (PG, G, so on).
        // This data is provided by the GIPHY API.
        // Only once you get images displaying with button presses should you move on to the next step.

    });

    // Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

)};

// Deploy your assignment to Github Pages

// * * B O N U S * *

// *Ensure your app is fully mobile responsive.

// Allow users to request additional gifs to be added to the page.
    // Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

// List additional metadata (title, tags, etc) for each gif in a clean and readable format.

// Include a 1-click download button for each gif, this should work across device types.

// Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio

// Allow users to add their favorite gifs to a favorites section.
    // This should persist even when they select or add a new topic.
    // If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).