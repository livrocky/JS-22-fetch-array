const baseUrl = "fakeStore.json";
//parsisiunciam products is fake store api
const mainContainer = document.getElementById("main-container");

function getProduct(items) {
  fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data===", data);
      data.forEach((uObj) => {
        //kvieciam funkcija + paduodam parametrus
        mainContainer.insertAdjacentHTML("beforeend", createSingleCard(uObj));
      });
    })
    .catch((error) => console.log(error.message));
}
getProduct();

//sugeneruojam produktu korteles kaip pavyzdyje

//1. pasirasyti html ir css vienos prekes sukurimui
//sukurti div su funkcija

//sukurti img su paragrafais

function createSingleCard(userObject) {
  //   console.log("userObject===", userObject);
  return `
  <div class="container">
  <img src="${userObject.image}" alt="product">
  <div class="product-info">
      <h2 class="product-name">${userObject.title}</h2>
      <p class="price">$${userObject.price}</p>
  </div>
</div>`;
}
