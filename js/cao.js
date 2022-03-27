// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).

//susikuriam lentele
const tableEl = document.createElement("table");
tableEl.id = "mainTable";
document.body.append(tableEl);
console.log(tableEl);
// parsisiusnciam products is API
function getTable() {
  fetch("https://magnetic-melon-yam.glitch.me/")
    .then((resp) => resp.json())
    .then((data) => {
      console.log("data===", data);
      data.forEach((userObject) => {
        mainTable.insertAdjacentHTML("beforeend", createSingleTable(userObject));
      });
    })
    .catch((err) => console.log(err.message));
}
getTable();

//susikuriam lentele html
const tableRow = document.createElement("tr");
tableEl.append(tableRow);
const tableHead1 = document.createElement("th");
const tableHead2 = document.createElement("th");
const tableHead3 = document.createElement("th");
const tableHead4 = document.createElement("th");
const tableHead5 = document.createElement("th");
tableHead1.textContent = "Id";
tableHead2.textContent = "Name";
tableHead3.textContent = "Surname";
tableHead4.textContent = "City";
tableHead5.textContent = "fav_color";
tableRow.append(tableHead1, tableHead2, tableHead3, tableHead4, tableHead5);
function createSingleTable(userObject) {
  return `
    <table>
    <td>${userObject.id}</td>
    <td>${userObject.name.split(" ")[0]}</td>
    <td>${userObject.name.split(" ")[1]}</td>
    <td>${userObject.city}</td>
    <td>${userObject.fav_color}</td>
  </table>`;
}
