let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let products = [];
addBtn.addEventListener("click", function() {
    if (productName.value === "" || productPrice.value === "" || productCategory.value === "") {
        alert("Please fill in all fields");
        return;
    }
    let newProduct={
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value
    }
    console.log(newProduct);
  products.push(newProduct);
  console.log(products);
   
    clearInputs();
    rendertable();
});

function rendertable() {
    tbody.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let row = `<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td><button class="edit-Btn" data-index="${i}">Edit</button></td>
        <td><button class="delete-Btn" data-index="${i}">Delete</button></td>
        </tr>`;
        tbody.innerHTML += row;
    }
}
function clearInputs() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
}

