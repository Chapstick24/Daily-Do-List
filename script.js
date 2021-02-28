// adding moment to my Jumbotron

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm a"))


// Save button for 9am-5PM

// need to come back to this with tutor-----------------------------------

saveButton = document.querySelector("#saveBtn")

$("#saveBtnNine").on(function(){
    var timeByHour = "#textareaNine";
    console.log("Something here")
    var infoColumn = document.querySelector('textareaNine').value;
    listConent(timeByHour,infoColumn);
    doToslist()
})

function doToslist(time, details) {

    const newAppointment = { 
        time: time, 
        title: details 
    }
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    scheduleArray.push(newAppointment);

    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));

}function writeToSchedule() {
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    scheduleArray.map(newAppointment => {
        if (newAppointment.title != 0) {

            $(newAppointment.time).html(newAppointment.title);
        }
    });
}

var time = moment();
var format = 'hh:mma';
var nine1 = moment('9:00am', format);
var nine2 = moment('10:00am', format);
var ten1 = moment('10:00am', format);
var ten2 = moment('11:00am', format);
var eleven1 = moment('11:00am', format);
var eleven2 = moment('11:59am', format);
var noon1 = moment('12:00pm', format);
var noon2 = moment('12:59pm', format);
var one1 = moment('1:00pm', format);
var one2 = moment('1:59pm', format);
var two1 = moment('2:00pm', format);
var two2 = moment('2:59pm', format);
var three1 = moment('3:00pm', format);
var three2 = moment('3:59pm', format);
var four1 = moment('4:00pm', format);
var four2 = moment('4:59pm', format);
var five1 = moment('5:00pm', format);
var five2 = moment('5:59pm', format);


// add a function to run everysecond to see if the hour has past

setInterval(function () {
    checkTime();
}, 1000);

function checkTime() {
    // adding grey and green to past and future hours
    if (time.isBefore(nine1)) {
        $('#userInput9 ').css('background', '#77dd77');
    }
    if (time.isAfter(nine2)) {
        $('#userInput9').css('background', '#d3d3d3');
    }
    if (time.isBefore(ten1)) {
        $('#userInput10').css('background', '#77dd77');
    }
    if (time.isAfter(ten2)) {
        $('#userInput10').css('background', '#d3d3d3');
    }
    if (time.isBefore(eleven1)) {
        $('#userInput11').css('background', '#77dd77');
    }
    if (time.isAfter(eleven2)) {
        $('#userInput11').css('background', '#d3d3d3');
    }
    if (time.isBefore(noon1)) {
        $('#userInput12').css('background', '#77dd77');
    }
    if (time.isAfter(noon2)) {
        $('#userInput12').css('background', '#d3d3d3');
    }
    if (time.isBefore(one1)) {
        $('#userInput1').css('background', '#77dd77');
    }
    if (time.isAfter(one2)) {
        $('#userInput1').css('background', '#d3d3d3');
    }
    if (time.isBefore(two1)) {
        $('#userInput2').css('background', '#77dd77');
    }
    if (time.isAfter(two2)) {
        $('#userInput2').css('background', '#d3d3d3');
    }
    if (time.isBefore(three1)) {
        $('#userInput3').css('background', '#77dd77');
    }
    if (time.isAfter(three2)) {
        $('#userInput3').css('background', '#d3d3d3');
    }
    if (time.isBefore(four1)) {
        $('#userInput4').css('background', '#77dd77');
    }
    if (time.isAfter(four2)) {
        $('#userInput4').css('background', '#d3d3d3');
    }
    if (time.isBefore(five1)) {
        $('#userInput5').css('background', '#77dd77');
    }
    if (time.isAfter(five2)) {
        $('#userInput5').css('background', '#d3d3d3');
    }
}

// This worked