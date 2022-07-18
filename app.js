"use strict";

var allfood = [];


//creat constructor


function Food (foodId ,foodName, foodType, price) {
  this.foodId = randId ();
  this.foodName = foodName;
  this.foodType = foodType;
  this.price = price;
  allfood.push(this);
}

// Generat unique and random number

function randId (){
    return Math.floor(1000 + Math.random() * 9000);
    
 }


// submit

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);






function handleSubmit(event) {


 
  event.preventDefault();
  let foodId = randId();
  let foodName = event.target.foodName.value;
  let foodType = event.target.foodType.value;
  let price = event.target.price.value;
  let newFood = new Food(foodId,foodName, foodType, price);

//using CDN library to add confirm box

Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success');
    localStorage.setItem("allfood", JSON.stringify(allfood));
    console.log(randId(),"added")
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}

// before new style with CDN library
 /*  let addConfirm = confirm ('are you sure to add this item ?');
 console.log(addConfirm);

(addConfirm==true)? console.log(randId(),"added") : console.log("ignored"); */
/*
  if (addConfirm===(true)) {

  // if customer confirm add item , it wii save in local storage

  localStorage.setItem("allfood", JSON.stringify(allfood));
}}
*/