//RECOMMENDED to start with everytime
$(document).ready(function(){
    //setting specific time block variable to local storage
    //pulling the item from localstroage to get the locally saved item 9
    var nine = localStorage.getItem("9");
    //making div id 9 run thru the child ( the description )
    //then making that id = to the value of the variable established (nine)
    $("#9").children(".description").val(nine);
    var ten = localStorage.getItem("10");
    $("#10").children(".description").val(ten);
    var eleven = localStorage.getItem("11");
    $("#11").children(".description").val(eleven);
    var twelve = localStorage.getItem("12");
    $("#12").children(".description").val(twelve);
    var thirteen = localStorage.getItem("13");
    $("#13").children(".description").val(thirteen);
    var fourteen = localStorage.getItem("14");
    $("#14").children(".description").val(fourteen);
    var fifteen = localStorage.getItem("15");
    $("#15").children(".description").val(fifteen);
    var sixteen = localStorage.getItem("16");
    $("#16").children(".description").val(sixteen);
    var seventeen = localStorage.getItem("17");
    $("#17").children(".description").val(seventeen);
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