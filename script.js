// shows current date

var timerInterval = setInterval(function () {
    var datetime = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('#today').text(datetime);
}, 1000);

let saveBtn = $(".saveBtn")

// main function

$(function () {
    saveBtn.on('click', function () {
        let task = $(this).siblings("textarea").val();
        let time = $(this).parent().attr("id")

        localStorage.setItem(time, task);
    });

    function currentHour() {
        let currentTime = dayjs().format('H');

        // converts time to integer
        $(".timeSlot").each(function () {
            let timeSlot = parseInt($(this).attr("id"));

            // sees if time slot is future present or past based on local time
            if (timeSlot < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeSlot == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }


    // retrieves what was in the text box from local storage after hitting save

    $("#08 textarea").val(localStorage.getItem("08"));
    $("#09 textarea").val(localStorage.getItem("09"));
    $("#10 textarea").val(localStorage.getItem("10"));
    $("#11 textarea").val(localStorage.getItem("11"));
    $("#12 textarea").val(localStorage.getItem("12"));
    $("#13 textarea").val(localStorage.getItem("13"));
    $("#14 textarea").val(localStorage.getItem("14"));
    $("#15 textarea").val(localStorage.getItem("15"));
    $("#16 textarea").val(localStorage.getItem("16"));
    $("#17 textarea").val(localStorage.getItem("17"));
    $("#18 textarea").val(localStorage.getItem("17"));

    currentHour();
    setInterval(currentHour, 1000)
});
