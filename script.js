// Stores all of the hours' events
var events = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

// Current Date
var today = moment().format('MMMM Do YYYY');
$("#currentDay").text(today);

// Timeblock Colors
var now = moment().format();
var currentTime = now.split(':').join(',').split('-').join(',').split('T').join(',').split(',');
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


function init() {
    var storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents !== null) {
      events = storedEvents;
      $.each(events, function(hour, event){
        var key = $("#" + hour);
        console.log(event);
        key.find("textarea").text(event);
      })
    }
}

// Stringify and set key
function saveEvent() {
    localStorage.setItem("events", JSON.stringify(events));
}

init();

// When you click the button
$("button").click(function() {
    var eventText = $(this).parent(".time-block").children("textarea").val();
    var hour = parseInt($(this).parent(".time-block").attr("id"));
    events[hour] = [eventText]; 
    saveEvent();
    console.log(events[hour]);
})
