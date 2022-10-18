$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var value = $(this).siblings('description').val();
        var time = $(this).parent()
        console.log("time", time);
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
        // loop over time blocks
        $('.time-block').each(function (){
            var blockHour = parseInt($(this).attr('id').split('-'))
        })
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        // check if we've moved past this time
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    ///need to repeat line 21 for all the other hours


    // display current day on page
});