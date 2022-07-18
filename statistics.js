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


console.log(main);

//task 13

//add canvas

//bar

const names = [];
const prices = [];
for (let i = 0; i < allfood.length; i++) {
    names.push(allfood[i].foodName);
    prices.push(allfood[i].price);
    
}

const data = {
  labels: names,

  datasets: [{
    label: 'My Food Type Dataset',
    data: prices,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 10
  }]
};


  const config = {
    type: 'bar',
    data: data,
    
    options: { 
      scales: { 
        y: {
          beginAtZero: true ,
          
        }
      }
    },
  };
 

//rendring

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


