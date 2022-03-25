// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).

//susikuriam lentele

// const tableEl = document.createElement("table");
// tableEl.className("table");
// const mainTable = document.getElementById("mainTable");
// const tableHeadEl = document.createElement("thead");
// const tableBodyEl = document.createElement("tbody");

// parsisiusnciam products is API
function getTable() {
  fetch("https://magnetic-melon-yam.glitch.me/")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data===", data);
      data.forEach((uObj) => {
        mainTable.insertAdjacentHTML("beforeend", createSingleTable(uObj));
      });
    })
    .catch((err) => console.log(err.message));
}
getTable();

function createSingleTable(userObject) {
  return `
  <table>
  <tr>
      <th>Id</th>
      <th>Name</th>
      <th>City</th>
      <th>fav_color</th>
  </tr>
  <td>${userObject.id}</td>
  <td>${userObject.name}</td>
  <td>${userObject.city}</td>
  <td>${userObject.fav_color}</td>
</table>`;
}
