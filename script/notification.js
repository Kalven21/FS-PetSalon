function showNotification(msg,style){
    $("#notificationText").text(msg);
    $("#notification").show();
    $("#notification").addClass(style);
    setTimeout(hideNotification,5000);
}
function hideNotification(){
    $("#notification").hide();
}