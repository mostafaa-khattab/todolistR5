let userInput = document.getElementById("userInput");
let homeContent = document.getElementById("homeContent");
let alertDis = document.getElementById("alertDis");
let searchInput = document.getElementById("searchInput");

let items = [];

if (localStorage.getItem("allItemsNeed") != null) {
  items = JSON.parse(localStorage.getItem("allItemsNeed"));
  displayItems();
}

function addItem() {
  if (userInput.value == "") {
    alertDis.style.display = "block";
  } else {
    alertDis.style.display = "none";

    items.push(userInput.value);
    userInput.value = "";
    localStorage.setItem("allItemsNeed", JSON.stringify(items));

    displayItems();
  }
}

function displayItems() {
  let cartona = "";

  items.forEach((item, inx) => {
    cartona += `<div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
            <p id="item" class="m-0 p-0">${item}</p>
            <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${inx})" ></i>
        </div>`;
  });

  homeContent.innerHTML = cartona;
}

function deleteItem(index) {
  items.splice(index, 1);

  localStorage.setItem("allItemsNeed", JSON.stringify(items));
  displayItems();
}

searchInput.addEventListener("input" , (e) => {
  searchItems(e.target.value)
  
})

function searchItems(searchValue) {
  let cartona = "";
  items.forEach((item, inx) => {

    if (item.toLowerCase().includes(searchValue.toLowerCase())) {
      cartona += `<div
            class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
            <p id="item" class="m-0 p-0">${item.toLowerCase().replace(searchValue.toLowerCase() , `<span class="text-white fw-bolder">${searchValue}</span>` )}</p>
            <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${inx})" ></i>
        </div>`;
    }


  });

  homeContent.innerHTML = cartona;
}

//   pop , shift , splice , slice

// //        0  1  2  3  4
// let x = [ 1, 2, 3, 4, 5]

// // 1
// console.log(x); // [ 1, 2, 3, 4, 5]

// // 2
// console.log( x.slice(1,2) ); // []

// // 3
// console.log( x.splice(1,1) ); // [2]

// // 4
// console.log(x); // [ 1, 3, 4, 5]

// // localStorage (browser storage)
// // cookiesStorage      sessionStorage            localStorage
// //     4KB                 4MB                       5MB
// // save data
// // customize data    until browser closed    until deleted by user

// localStorage.setItem("name" , "ahmed")

// // localStorage.removeItem("name")

// // localStorage.clear()

// console.log( localStorage.getItem("name")  );
