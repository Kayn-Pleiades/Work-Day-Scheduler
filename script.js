// Current Date
var today = moment().format('MMMM Do YYYY');
$("#currentDay").text(today);

// Timeblock Colors
var now = moment().format();
var currentTime = now.split(':').join(',').split('-').join(',').split('T').join(',').split(',');
console.log(currentTime[3]);
$(".time-block").each(function(){
    var hour = parseInt($(this).attr("id"));
    if (currentTime[3] > hour) {
        $(this).removeClass("present future");
        $(this).addClass("past");
    }
    else if (currentTime[3] < hour) {
        $(this).removeClass("present past");
        $(this).addClass("future");
    }
    else {
        $(this).removeClass("future past");
        $(this).addClass("present");
    }
});

