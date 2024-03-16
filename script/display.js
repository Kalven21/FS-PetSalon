let text;
let list;
let card;
let row;

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
        let image=displayImage(pet);
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <div>
                <p>${pet.name}</p>
                <p>${pet.age}</p>
                <p>${pet.gender}</p>
                <p>${pet.breed}</p>
                <p>${pet.service}</p>
                <button class="btn btn-danger btn-sma" onclick="deletePet(${i});">X</button>
            </div>
            <img src="${image}" alt="type of pet">    
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
function displayBreed(){
    let dog=0;
    let cat=0;
    let bird=0;
    let fish=0;
    let other=0;
    
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.breed.toLowerCase() == "dog"){
            dog++;
            document.getElementById("totalDogs").innerHTML=dog;
        }else if(pet.breed.toLowerCase() == "cat"){
            cat++;
            document.getElementById("totalCats").innerHTML=cat;
        }else if(pet.breed.toLowerCase() == "bird"){
            bird++;
            document.getElementById("totalBirds").innerHTML=bird;
        }else if(pet.breed.toLowerCase() == "fish"){
            fish++;
            document.getElementById("totalFishes").innerHTML=fish;
        }else if(pet.breed.toLowerCase() == "others"){
            other++;
            document.getElementById("totalOthers").innerHTML=other;
        }
    }
}
function displayImage(pet){   
    if(pet.breed.toLowerCase() == "dog"){
        return `img/Dog.jpg`
    }else if(pet.breed.toLowerCase() == "cat"){
        return `img/Cat.jpg`
    }else if(pet.breed.toLowerCase() == "bird"){
        return `img/Bird.jpg`
    }else if(pet.breed.toLowerCase() == "fish"){
        return `img/Fish.jpg`
    }else if(pet.breed.toLowerCase()  == "others"){
        return `img/Others.jpg`
    }
}
function displayRows(){
    const TABLE = document.getElementById("petTable");
    row="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        row+=`
        <tr id="${i}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td><button class="btn btn-danger btn-sma" onclick="deletePet(${i});">X</button></td>
        </tr>
        `;
    }
    TABLE.innerHTML=row;
}
