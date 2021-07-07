// this is used to convert the time into seconds for making boxes different colors

var time = moment().format('hh:mm:ss');
var array = time.split(":");
var seconds = (parseInt(array[0], 10) * 60 * 60) + (parseInt(array[1], 10) * 60) + parseInt(array[2], 10);


console.log(seconds)

const textContentEl = document.getElementsByClassName("description")

for (element of textContentEl) {

        
}

//this shows the current date & time
function displayDate() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss');
    $('#currentDay').html(now)
    setTimeout(displayDate, 1000);
}

$(document).ready(function() {
    displayDate();
});

var eightContent = document.textContent('#0800');

var saveBtn = document.querySelector('#savebtn');

$("#0800").on("click", function() {
    alert("Task saved")
    localStorage.setItem("eightContent", input.val())
}

)