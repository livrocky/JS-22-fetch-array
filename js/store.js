// 2. kartoti ta htmla konteineryje su duomenimis is fake store ir sukurti 20 prekiu

// 3. sukurti funkcija kuriai padavus ratinga, ji grazina zvaigzdutes.

const baseUrl = "https://fakestoreapi.com";
// parsisiusnciam products is fake store api

fetch(`fakeStore.json`)
  .then((resp) => resp.json())
  .then((data) => displayProduct(data))
  .catch((err) => console.log(err.message));

const displayProduct = (products) => {
  for (product of products) {
    const displayProduct = document.getElementById("display-product");
    const div = document.createElement("div");
    div.innerHTML = `
<div class="container">
            <img src="${product.image}" alt="product">
            <div class="product-info">
                <h2 class="product-name">${product.title}</h2>
                <p class="price">${product.price}</p>
            </div>
        </div>`;
    displayProduct.appendChild(div);
  }
};
