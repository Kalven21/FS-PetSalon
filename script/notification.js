function showNotification(msg,style){
    $("#notificationText").text(msg);
    $("#notification").show();
    $("#notification").removeClass("alert-danger");
    $("#notification").removeClass("alert-succes");
    $("#notification").addClass(style);
    setTimeout(hideNotification,5000);
}
function hideNotification(){
    $("#notification").hide();
}