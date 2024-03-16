//this line is similar to window.onload
$(document).ready(function(){
    console.log("services action");
    
    //all the code here
    $("#groomingInfo").hide();
    $("#vaccinesInfo").hide();
    $("#hotelInfo").hide();

    $("#groomingB").click(function(){
        $("li").removeClass("dark");
        $("#groomingInfo").show();
        $("#vaccinesInfo").hide();
        $("#hotelInfo").hide();
    });
    $("#vaccinesB").click(function(){
        $("li").removeClass("dark");
        $("#vaccinesInfo").show();
        $("#groomingInfo").hide();
        $("#hotelInfo").hide();
    });
    $("#hotelB").click(function(){
        $("li").removeClass("dark");
        $("#hotelInfo").show();
        $("#groomingInfo").hide();
        $("#vaccinesInfo").hide();
    });
});