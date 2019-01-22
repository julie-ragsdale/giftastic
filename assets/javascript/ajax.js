// q - search query term or phrase 
// limit - (optional) number of results to return, maximum 100. Default 25.
// rating - limit results to those rated (y,g, pg, pg-13 or r).

$(document).ready(function() {
    console.log("Document ready");
    // Array of search terms
    var topics = [
        'puppy',
        'kitten',
        'coffee',
        'latte',
        'espresso',
        'watercolor',
        'art',
        'plants',
        'houseplant',
        'coding',
        'science',
        'botany',
        'overcast',
        'cozy',
        'dog',
        'cat',
        'embroidery',
        'sewing'
    ];
    console.log(topics);

    // Take topics from array and create buttons in HTML
    function renderButtons() {
        // Use a for loop to append a button for each string in the array
        $('#button-grid').empty();
        topics.forEach(function(topic) {
            var button = $('<button>');
            button.addClass('topic');
            button.attr('data-id', topic);
            button.text(topic);
            button.css({margin: '15px',
                position: 'relative',
                fontSize: '20px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sansSerif",
                backgroundColor: '#333',
                color: '#fff',
                border: '2px solid #fff',
            });
            $('#button-grid').append(button);
        }); 
    }
    renderButtons();
        
    // Event handler for button click
    $('#searchbar_add-button').on('click', function(event) {
        event.preventDefault();
        var value = $('#searchbar-input').val().trim();
        topics.push(value);
        renderButtons();
        $('#searchbar-input').val('');
        $('#image-grid').empty();
    });

    function renderGifs() {
        $(document).on('click', '.topic', function() {
            // Refers to the button being clicked
            var topic = $(this).attr(response);
            var giphyAPI = 'KhYgqTlp6zKKgwSZRM66bvMXcRJIm070';
            var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=KhYgqTlp6zKKgwSZRM66bvMXcRJIm070&q=' + topic + '&limit=10&lang=en';
            // AJAX configuration
            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function(response) {
                console.log(response);
                var newButton = $('<button>').text(response.search);
                $('#button-grid').html(JSON.stringify(response));
                $('#image-grid').attr('src', url);
            });
            
            var rating = $('<p>').text('Rating: ' + response.rating);
            var image = $('<img>').attr('src', response.images.fixed-width);
            
            var buttonDiv = $('<div class = "topic">');
            var button = $('<button>').text(response.Search);
            
            button.append(response.Search);
            
            // Under every gif, display its rating (PG, G, so on).
            buttonDiv.prepend(image, rating);    
            
            // On click, have GIF animate or be still
            $('.gif').on('click', function(){
                var state = $(this).attr('data-state');
                console.log(state);
                
                // The state acts as a flag to tell you whether image is currently still or animating
                if (state === 'still') {
                    var url = $(this).attr('data-animate');
                    $(this).attr('src', url);
                    $(this).attr('data-state', 'animate');
                } else {
                    var url = $(this).attr('data-still');
                    $(this).attr('src', url);
                    $(this).attr('data-state', 'animate');
                }
            });    
        });
    }
    renderGifs()
    
    // Only once you get images displaying with button presses should you move on to the next step.
    
    
    // Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
    
});

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