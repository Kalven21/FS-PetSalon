//JS vzs JQuery


$("h1").click(function(){
    $(".header-img img").hide();
});

$("p").click(function(){
    $(".header-img img").show();
});

$("#mode").click(function(){
    $("header").addClass("dark");
});
//document.getElementsByTagName("h1")[0].addEventListener("click",function(){
//    console.getElementsByClassName(".myButton")[0].style.display="none";
//})