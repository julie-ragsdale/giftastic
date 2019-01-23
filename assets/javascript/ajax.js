// Giphy API key = KhYgqTlp6zKKgwSZRM66bvMXcRJIm070

$(document).ready(function() {
    console.log("Document ready");
    // Array of search terms
    var topics = [
        'red panda',
        'dog',
        'cat',
        'bearded dragon',
        'husky',
        'guinea pig',
        'parakeet',
        'hamster',
        'bunny',
        'fox',
        'raccoon'
    ];
    console.log(topics);
    
    $(document).on('click', '.topic', function() {
        // Refers to the button being clicked
        var topic = $(this).attr('data-id');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=KhYgqTlp6zKKgwSZRM66bvMXcRJIm070&q=' + topic + '&limit=10&lang=en';
        
        // AJAX configuration
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            $('<button>').text(response.search);
            var button = $('<button>').text(response.Search);
            button.append(response.Search);
            $('#image-grid').empty();

            // Loop through all topics in array
            for (i = 0; i < topics.length; i ++) {
                var imageUrl = response.data[i].images.fixed_width_still.url;
                var stillUrl = response.data[i].images.fixed_width_still.url
                var animateUrl = response.data[i].images.fixed_width.url
                var imageGif = $('<img>');
                var gifRating = $('<p>').text('Rated: ' + response.data[i].rating);
                var gifDiv = $('<div class="gif clearfix" style="float:left">')
                imageGif.attr('src', imageUrl);
                imageGif.attr('data-still', stillUrl);
                imageGif.attr('data-animate', animateUrl);
                imageGif.attr('data-state', 'still');
                gifDiv.append(imageGif);
                gifDiv.append(gifRating);
                $('#image-grid').append(gifDiv);
            }
        });
    });   

    // On click, have GIF animate or be still
    $('#image-grid').on('click', 'img', function(){
        var state = $(this).attr('data-state');
        console.log(state);
        if (state === 'still') {
            var url = $(this).attr('data-still');
            $(this).attr('src', url);
            $(this).attr('data-state', 'animate');
        } else {
            var url = $(this).attr('data-animate');
            $(this).attr('src', url);
            $(this).attr('data-state', 'still');
        }
    });
                    
    
    // Loop through array to create a button for each topic
    function renderButtons() {
        $('#button-grid').empty();
        topics.forEach(function(topic) {
            var button = $('<button>');
            button.addClass('topic');
            button.attr('data-id', topic);
            button.text(topic);
            button.css({margin: '15px',
                position: 'relative',
                width: '200px',
                height: '50px',
                fontSize: '20px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sansSerif",
                backgroundColor: '#333',
                color: '#fff',
                border: '2px solid #fff',
                borderRadius: '25px'
            });
            $('#button-grid').append(button);
        }); 
    }
    renderButtons();
        
    // On click, push user input to topics array
    $('#searchbar_add-button').on('click', function(event) {
        event.preventDefault();
        var value = $('#searchbar-input').val().trim();
        topics.push(value);
        renderButtons();
        $('#searchbar-input').val('');
        $('#image-grid').empty();
    });
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