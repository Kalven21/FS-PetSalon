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
    //get the values from the HTML
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //create the object using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    //spush the objet to the array
    petSalon.pets.push(newPet);
    //display the array on the console
    displayNames();
}
function isValid(){

}
function init(){
    //hook events
    //initial functions
    //calculateAverage();
    //creating a new pet
    let pet1 = new Pet("Scooby",40,"Male","Dog","");
    petSalon.pets.push(pet1);
    let pet2 = new Pet("Doggy",60,"Male","Dog","");
    petSalon.pets.push(pet2);
    let pet3 = new Pet("Nia",20,"Female","Dog","");
    petSalon.pets.push(pet3);
    let pet4 = new Pet("Chato",60,"Male","Cat","");
    petSalon.pets.push(pet4);
    displayNames();

    //load the inputs
    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputGender = document.getElementById("txtBreed");
    inputGender = document.getElementById("txtService");
}

window.onload=init;