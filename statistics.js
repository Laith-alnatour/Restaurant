"use strict";

var main = document.getElementsByTagName("main");
var table = document.createElement("table");
table.className = "table";

// call table header

createTable(); 

// food from local storage

var allfood = JSON.parse(localStorage.getItem("allfood"));


// print all data

if (allfood) {
  allfood.forEach(food => {
    renderFood(food);
  });
}


// make taple to content the items

function createTable() {

  // header

  const tableHeaderRow = document.createElement("tr");
  tableHeaderRow.className = "tableHeader";
  const tableHeader1 = document.createElement("th");
  tableHeader1.className = "table";
  const tableHeader2 = document.createElement("th");
  tableHeader2.className = "table";
  const tableHeader3 = document.createElement("th");
  tableHeader3.className = "table";
  const tableHeader4 = document.createElement("th");
  tableHeader4.className = "table";

  // content

  tableHeader1.textContent = "ID";
  tableHeader2.textContent = "Name";
  tableHeader3.textContent = "Type";
  tableHeader4.textContent = "Price";

  // append
  tableHeaderRow.appendChild(tableHeader1);
  tableHeaderRow.appendChild(tableHeader2);
  tableHeaderRow.appendChild(tableHeader3);
  tableHeaderRow.appendChild(tableHeader4);


  table.appendChild(tableHeaderRow);
}

// print taple

function renderFood(allfood) {


 
  const row = document.createElement("tr");
  const id = document.createElement("td");
  id.className = "table";
  const name = document.createElement("td");
  name.className = "table";
  const type = document.createElement("td");
  type.className = "table";
  const price = document.createElement("td");
  price.className = "table";

  // content of taole
    
    id.textContent = allfood.foodId;
    name.textContent = allfood.foodName;
    type.textContent = allfood.foodType;
    price.textContent = allfood.price;

 
  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(type);
  row.appendChild(price);


  table.appendChild(row);


  main[0].appendChild(table);
}


console.log(main)