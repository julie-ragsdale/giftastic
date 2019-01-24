// Giphy API key = KhYgqTlp6zKKgwSZRM66bvMXcRJIm070

$(document).ready(function() {

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
    
    $(document).on('click', '.topic', function() {
        var topic = $(this).attr('data-id');
        var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=KhYgqTlp6zKKgwSZRM66bvMXcRJIm070&q=' + topic + '&limit=10&lang=en';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            $('<button>').text(response.search);
            var button = $('<button>').text(response.Search);
            button.append(response.Search);
            $('.gallery').empty();

        // Ignore - I plan on using a modulo to create a grid that will place items from the array into the grid based on their index
        //  Will use modulo because the grid will have multiple rows, so finding the remainder will serve as an identifier in a two dimensional array
            // This is my gallery grid
            // $('').append(gifDiv); // Row 1 Col 1
            // $('').append(gifDiv); // Row 1 Col 2
            // $('').append(gifDiv); // Row 1 Col 3
            // $('').append(gifDiv); // Row 1 Col 4
            // $('').append(gifDiv); // Row 1 Col 5

            // $('').append(gifDiv); // Row 2 Col 1
            // $('').append(gifDiv); // Row 2 Col 2
            // $('').append(gifDiv); // Row 2 Col 3
            // $('').append(gifDiv); // Row 2 Col 4
            // $('').append(gifDiv); // Row 2 Col 5

            // Loop through all topics in array
            for (i = 0; i < response.data.length; i ++) {
                var imageUrl = response.data[i].images.original_still.url;
                var stillUrl = response.data[i].images.original_still.url;
                var animateUrl = response.data[i].images.original.url;
                var gif = $('<img>');
                var gifTitle = $('<p>').text('Title: ' + response.data[i].title);
                var gifRating = $('<p>').text('Rated: ' + response.data[i].rating);
                var gifDiv = $('<div class="gallery-item clearfix">');
                
                // Looks as if this line is grabbing the correct URL, but I am getting an error about missing a closing parenthesis
                var dlBtn = $('<button type="submit" onclick="window.open(' + imageUrl + ')">').text('Download!');
                
                $('.gallery-header').css({visibility: 'visible'});
                gif.attr('src', imageUrl);
                gif.attr('data-still', stillUrl);
                gif.attr('data-animate', animateUrl);
                gif.attr('data-state', 'still');
                gif.css({
                    border: '2px solid #fff',
                    borderRadius: '25px',
                    maxWidth: '200px',
                    float: 'left'
                });
                gifTitle.css({
                    color: '#333',
                    fontSize: '24px'
                });
                dlBtn.css({
                    backgroundColor: '#fc766a',
                    color: '#fff',
                    fontFamily: '',
                    fontSize: '20px',
                    border: '2px solid #fff',
                    borderRadius: '25px',
                });
                gifDiv.append(gif);
                gifDiv.append(gifTitle);
                gifDiv.append(gifRating);
                gifDiv.append(dlBtn);
                $('.gallery-item').css({
                    maxWidth: '200px',
                    float: 'left',
                    margin: '25px',
                });

                // Append items to respective rows
                if (i <= 4) {
                    $('#gallery_row-1').append(gifDiv);
                
                // The next four gifs (5 through 8) should be appended to the second row 
                } else if ( 4 < i < 9) {
                    $('#gallery_row-2').append(gifDiv);

                // The last two gifs should be appended to the third row - Unsure of why they are not
                } else {
                    $('#gallery_row-3').append(gifDiv);
                }
            }
        });
    });   
    
    // On click, have the gif animate or be still
    $('.gallery').on('click', 'img', function(){
        var state = $(this).attr('data-state');
        if (state === 'still') {
            var url = $(this).attr('data-animate');
            $(this).attr('src', url);
            $(this).attr('data-state', 'animate');
        } else {
            var url = $(this).attr('data-still');
            $(this).attr('src', url);
            $(this).attr('data-state', 'still');
        }
    });                    
    
    // Loop through the array to create a button for each topic
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
        
    // On click, push user input into the topics array
    $('#searchbar_add-button').on('click', function(event) {
        event.preventDefault();
        var value = $('#searchbar-input').val().trim();
        topics.push(value);
        renderButtons();
        $('#searchbar-input').val('');
        $('.gallery').empty();
    });
});