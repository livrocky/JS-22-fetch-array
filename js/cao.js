// Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me

//1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).

//susikuriam lentele
const tableEl = document.createElement("table");
tableEl.id = "mainTable";
document.body.append(tableEl);
// console.log(tableEl);
// parsisiusnciam products is API
function usersInfo(vip) {
  fetch("https://magnetic-melon-yam.glitch.me/")
    .then((resp) => resp.json())
    .then((data) => {
      mainTable.innerHTML = "";
      if (vip === true) {
        const vip = data.filter((a) => a.vip);
        vip.forEach((b) => {
          mainTable.insertAdjacentHTML("beforeend", createSingleTable(b));
        });
      } else {
        data.forEach((uObj) => {
          mainTable.insertAdjacentHTML("beforeend", createSingleTable(uObj));
        });
      }
    })
    .catch((err) => console.log(err.message));
}
usersInfo();

//susikuriam lentele html
// const tableRow = document.createElement("tr");
// tableEl.append(tableRow);
// const tableHead1 = document.createElement("th");
// const tableHead2 = document.createElement("th");
// const tableHead3 = document.createElement("th");
// const tableHead4 = document.createElement("th");
// const tableHead5 = document.createElement("th");
// const tableHead6 = document.createElement("th");
// tableHead1.textContent = "Id";
// tableHead2.textContent = "Image";
// tableHead3.textContent = "Name";
// tableHead4.textContent = "Surname";
// tableHead5.textContent = "City";
// tableHead6.textContent = "fav_color";

// tableRow.append(tableHead1, tableHead2, tableHead3, tableHead4, tableHead5, tableHead6);

//susikuriam checkbox html

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "vip";
checkbox.id = "vip";
const label = document.createElement("label");
label.for = "vip";
label.textContent = "VIP";
document.body.prepend(checkbox);
document.body.prepend(label);

checkbox.addEventListener("input", (event) => {
  if (event.target.checked) {
    usersInfo(true);
  } else {
    usersInfo(false);
  }
});

//ikeliam
function createSingleTable(userObject) {
  return `
    <table>
    <td>${userObject.id}</td>
    <td><img src="${userObject.image}"
    alt="logo"></td>
    <td>${userObject.name.split(" ")[0]}</td>
    <td>${userObject.name.split(" ")[1]}</td>
    <td>${userObject.city}</td>
    <td>${userObject.fav_color}</td>
  </table>`;
}
