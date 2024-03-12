let text;
let list;
let card;

function displayNames(){
    list = document.getElementById("petList");
    text="";
    for(let i=0;i<petSalon.pets.length;i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
        console.log("iteration"+ i +" "+ text);
    }
    list.innerHTML=text;
}

function displayCards(){
    const petsDiv = document.getElementById("pets");
    card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}
function displayTotalAmountPets(){
    document.getElementById("totalPets").innerHTML=petSalon.pets.length;
}
function displayServiceCount(){
    let grooming=0;
    let vaccines=0;
    let hotel=0;

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service.toLowerCase() == "grooming"){
            grooming++;
            document.getElementById("totalGroomings").innerHTML=grooming;
        }else if(pet.service.toLowerCase() == "vaccines"){
            vaccines++;
            document.getElementById("totalVaccine").innerHTML=vaccines;
        }else{
            hotel++;
            document.getElementById("totalHotels").innerHTML=hotel;
        }
        
    }
}