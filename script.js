const productContainer = document.querySelector(".product-container");
const input = document.querySelector("#input");
let productData = [];

function fetchData() {
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => {
            productData = data; 
            createProductCard(data); 
        });
}

fetchData(); 

function createProductCard(products) {
    empty(); 

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;

        const title = document.createElement("h2");
        title.innerHTML = product.title;

        const price = document.createElement("p");
        price.innerHTML = `Price: $${product.price}`;

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(price);
        productContainer.appendChild(productCard);
    });
}

function searchProduct() {
    const searchValue = parseFloat(input.value);

    if (!isNaN(searchValue)) {
        const filteredData = productData.filter(product => product.price >= searchValue);
        createProductCard(filteredData); 
    } else {
        alert("Please enter a valid number.");
    }

    input.value = ""; 
}

function empty() {
    productContainer.innerHTML = "";
}
