let petSalon = {
    name:"The Fashion pet",
    phone:"999-999-9999",
    address:{
        country:"United State",
        city:"San Diego",
        zip:"12345",
    },
    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputBreed;
let inputService;

//creating the constructor
function Pet(name,age,gender,breed,service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}
/*function calculateAverage(){
    let totalAge = 0;
    for(var i=0;i<petSalon.pets.length;i++){
        totalAge += petSalon.pets[i].age 
    }
    totalAge = totalAge / petSalon.pets.length;
    document.getElementById("average").innerHTML=`
    <p>The sum of the ages is: ${totalAge}</p>`
}*/
function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayRows();
        clearForm();
        displayTotalAmountPets();
        displayServiceCount();
        displayCards();
        displayBreed();
    }
}
function isValid(pet){
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    if(!pet.name || !pet.service){
        if(!pet.name)inputName.classList.add("alert-error");
        if(!pet.service)inputService.classList.add("alert-error");
        return false;
    }
    return true;
}
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}
function init(){
    //hook events
    //initial functions
    //calculateAverage();
    //creating a new pet
    let pet1 = new Pet("Scooby",40,"Male","Dog","Grooming");
    let pet2 = new Pet("Doggy",60,"Male","Dog","Vaccines");
    let pet3 = new Pet("Nia",20,"Female","Dog","Hotel");
    let pet4 = new Pet("Chato",60,"Male","Cat","Hotel");
    petSalon.pets.push(pet1,pet2,pet3,pet4);
    displayRows();
    displayTotalAmountPets();
    displayServiceCount();
    displayCards();
    displayBreed();

    //load the inputs
    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputBreed = document.getElementById("txtBreed");
    inputService = document.getElementById("txtService");
}
window.onload=init;