// q - search query term or phrase 
// limit - (optional) number of results to return, maximum 100. Default 25.
// rating - limit results to those rated (y,g, pg, pg-13 or r).

$(document).ready(function() {
    console.log( "ready!" );
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
        'coding',
        'science',
        'botany'
    ]
    // have function that adds custom search term to array and then recall that function to fill in new button
    function renderButtons() {


        $('#button-grid').empty();

        topics.forEach(function(topic) {

            var button = $('<button>');
                button.addClass('topic');
                button.attr('data-name', topic);
                button.text(topic);
                $('')
        }); 
    }

    // Event handler for button click
    $('#...').on('click', function(event) {
        event.preventDefault;
        var value = $('#...').val().trim();
        topics.push(value);
        renderButtons();
    });

    $(document).on('click', '. ...', function() {
        
        // Refers to the button being clicked
        var topicNew = $(this).attr('data-name');
        
        // Giphy API key
        var giphyAPI = 'KhYgqTlp6zKKgwSZRM66bvMXcRJIm070';
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=KhYgqTlp6zKKgwSZRM66bvMXcRJIm070&limit=10';
        
        // AJAX configuration
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) { // Use 'then' as a promise (allows you to chain multiple calls; one doesnt execute before the previous one is finished; prevent callback hell)
            console.log(response);
        });
    });
        
        // Your app should take the topics in this array and create buttons in your HTML.
        var topics = response.Search;
        
        // Try using a loop that appends a button for each string in the array.
        for (i = 0; i < topics.length; i ++) {
            var buttonDiv = $('#buttons');
            var button = $('<button>').text(response.Search); // Not sure if this should be "Search"
        }
        
        button.append(response.Search);
        buttonDiv.append(btn);
        
        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
        
        // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
        
        // Under every gif, display its rating (PG, G, so on).
        // This data is provided by the GIPHY API.
        // Only once you get images displaying with button presses should you move on to the next step.
        
    
    // Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
    
});

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