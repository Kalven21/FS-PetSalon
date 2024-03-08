let text;
let list;
function displayNames(){
    list = document.getElementById("petList");
    text="";
    for(var i=0;i<petSalon.pets.length;i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
        console.log("iteration"+ i +" "+ text);
    }
    list.innerHTML=text;
}