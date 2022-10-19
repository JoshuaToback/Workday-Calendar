var dateToday = moment().format('dddd, MMM Do YYYY');
var currentTime = moment().hour();
$("#currentDay").html(dateToday);
// display current day on page

$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        // get nearby values
        var event = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log("time", time);
        console.log('event', event);
        // save in localStorage
        localStorage.setItem(time,event);
    });
    

    function hourUpdater() {

        // loop over time blocks
        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('hour')[1]);
            console.log(blockHour, currentTime);

            if (blockHour < currentTime) { 
               $(this).addClass('past');
            } else if (blockHour === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present')  
            } else { 
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
        
    };


    // load any saved data from localStorage
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));
    ///need to repeat line 21 for all the other hours

    hourUpdater();
});