//RECOMMENDED to start with everytime
$(document).ready(function(){
    var nine = localStorage.getItem("9");
    $("#9").children(".description").val(nine);
    var ten = localStorage.getItem("10");
    $("#10").children(".description").val(ten);
    //append current day to jumbotron
    $("#currentDay").text(moment());
    //save button
    $(".saveBtn").on("click", function(){
        console.log(this);
        var value = $(this).siblings(".description").val();
        //use this
       var time = $(this).parent().attr("id");
       localStorage.setItem(time, value);
    });
    
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function() {
    var hourBlock = parseInt($(this).attr("id"))
    console.log(hourBlock);
    if(
       hourBlock === currentHour 
    ) {
        $(this).css("background-color", "red");
    }
    else if(
        hourBlock > currentHour) {
            $(this).css("background-color", "green");

        }

    });
});