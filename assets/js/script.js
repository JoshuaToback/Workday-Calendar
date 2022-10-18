$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this).siblings('description').val();
        var time = $(this).parent().attr('id');
        console.log("time", time);
        console.log('value', value);
        // save in localStorage
        localStorage.setItem()
        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
        var currentHour = moment().hours();
        console.log('currentHour', currentHour);


        // loop over time blocks
        var eachFunction = function() {
            var blockHour = parseInt($(this).attr('data-hour'))

        // loop over time blocks ---> https://api.jquery.com/each/
        // check if we've moved past this time
        if (blockHour < currentHour) { 
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present')  
        } else { 
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        var timeBlock = $('.time-block').each(eachFunction);
        console.log('timeBlock', timeBlock);     
        };
    };

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    ///need to repeat line 21 for all the other hours


    // display current day on page
});