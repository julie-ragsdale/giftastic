// Giphy API key = KhYgqTlp6zKKgwSZRM66bvMXcRJIm070

$(document).ready(function() {

    let topics = [
        'cats',
        'dogs',
        'the office',
        'parks and rec',
        'houseplants',
        'coffee',
        'vaporwave',
        'coding',
        'ghibli',
        'hacker',
        'pokemon',
        'fallout'
    ];
    
    $(document).on('click', '.topic', function() {
        // empty main grid before appending anything else to it
        $('.grid').empty();
        $('#selectTheme').css({display: 'none'});

        const topic = $(this).attr('data-id');
        const queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=KhYgqTlp6zKKgwSZRM66bvMXcRJIm070&q=' + topic + '&limit=12&lang=en';

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(res=> {
            $('<button>').text(res.search);
            var button = $('<button>').text(res.Search);
            button.append(res.Search);
            $('.gallery').empty();

            // Append desired data from response
            for (i = 0; i < res.data.length; i ++) {
                const imageUrl = res.data[i].images.original_still.url;
                const stillUrl = res.data[i].images.original_still.url;
                const animateUrl = res.data[i].images.original.url;
                const gif = $('<img>');
                const gifTitle = $('<p>').text(res.data[i].title);
                const gifRating = $('<p>').text(`Rated: ${res.data[i].rating}`);
                const gifDiv = $('<div class="gallery-item">');
                
                // const dlBtn = $('<button type="submit" onclick="window.open(' + imageUrl + ')">').text('Download!');
                
                $('.gallery-header').css({visibility: 'visible'});
                gif.attr('src', imageUrl);
                gif.attr('data-still', stillUrl);
                gif.attr('data-animate', animateUrl);
                gif.attr('data-state', 'still');
                gif.css({
                    border: '2px solid #fff',
                    borderRadius: '25px',
                    width: '100%',
                    float: 'left',
                    cursor: 'pointer'
                });
                gifTitle.css({
                    color: '#fff',
                    fontSize: '20px'
                });
                // dlBtn.css({
                //     backgroundColor: '#111',
                //     color: '#fff',
                //     fontFamily: '',
                //     fontSize: '20px',
                //     border: '2px solid #fff',
                //     borderRadius: '5px',
                //     cursor: 'pointer'
                // });
                gifDiv.append(gif);
                gifDiv.append(gifTitle);
                gifDiv.append(gifRating);
                // gifDiv.append(dlBtn);
                $('.gallery-item').css({
                    marginRight: '30px',
                    textTransform: 'lowercase'
                });

                // Append items
                $('.grid').append(gifDiv);
            }
        });
    });   
    
    // On click, have the gif animate or be still
    $('.gallery').on('click', 'img', ()=> {
        const state = $(this).attr('data-state');
        if (state === 'still') {
            let url = $(this).attr('data-animate');
            $(this).attr('src', url);
            $(this).attr('data-state', 'animate');
        } else {
            let url = $(this).attr('data-still');
            $(this).attr('src', url);
            $(this).attr('data-state', 'still');
        }
    });                    
    
    // Loop through the array to create a button for each topic
    function renderButtons() {
        $('#button-grid').empty();
        topics.forEach(function(topic) {
            const button = $('<button>');
            button.addClass('topic');
            button.attr('data-id', topic);
            button.text(topic);
            button.css({
                margin: '4px',
                padding: '12px',
                position: 'relative',
                textAlign: 'left',
                width: '80%',
                fontSize: '20px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sansSerif",
                backgroundColor: '#333',
                color: '#fff',
                border: '1px solid #fff',
                borderRadius: '5px',
                cursor: 'pointer'
            });
            $('#button-grid').append(button);
        }); 
    }
    renderButtons();
        
    // On click, push user input into topics array
    $('#searchbar_add-button').on('click', event=> {
        event.preventDefault();
        const value = $('#searchbar').val().trim();
        topics.push(value);
        renderButtons();
        $('#searchbar').val('');
        $('.gallery').empty();
    });
});