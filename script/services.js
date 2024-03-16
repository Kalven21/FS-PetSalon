let Service={
    SERVICE:[]
}
let inputServi;
let inputPrice;

function Services(description,price){
    this.description = description;
    this.price = price;
}
function registerSer(){
    let newService = new Services(inputServi.value,inputPrice.value);
    if(isValid(newService)){
        Service.SERVICE.push(newService);
        showNotification("Something was added","alert-succes");
        displayInfo();
        clearForm();
    }
}
function isValid(ser){
    if(!ser.description||!ser.price){
        return false;
    }
    return true;
}

let info;
function displayInfo(){
    const infoDiv = document.getElementById("info");
    info="";
    for(let i=0;i<Service.SERVICE.length;i++){
        let ser = Service.SERVICE[i];
        info+=`
        <li>${ser.description}: $${ser.price}</li>
        `
    }
    infoDiv.innerHTML=info;
}
function clearForm(){
    inputServi.value = "";
    inputPrice.value = "";
}
function init(){
    inputServi = document.getElementById("txtService2");
    inputPrice = document.getElementById("txtPrice");
}
window.onload=init;