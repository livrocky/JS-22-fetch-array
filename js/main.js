// nusitaikom i mygtuka ir app el

// mygtuko paspaudimu parsisiusti visus vartotojus

// is gautu duomenu sugeneruoti li elementus (button)

// sugeneruoti ol el, ir sudeti i ji li elementus. ol el patalpini appEl

// console.log("main");

const baseUrl = "https://jsonplaceholder.typicode.com";
//nusitaikom i mygtuka ir app el
const usersBtnEl = document.getElementById("user=btn");
const usersSortBtnEl = document.getElementById("sort-by-name");
const appEl = document.getElementById("app");

function getUsers(doYouNeedToSort) {
  fetch(`${baseUrl}/users`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data===", data);
      if (doYouNeedToSort === true) {
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      generateUsersList(data);
    })
    .catch((err) => console.log(err.message));

  // function getUsersSort() {
  //   fetch(`${baseUrl}/users`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("data===", data);
  //       generateUsersList(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
  //     })
  //     .catch((err) => console.log(err.message));
}
//mygtuko paspaudimu parsisiusti visus vartotojus
function singleUserData(id) {
  fetch(`${baseUrl}/users/${id}`)
    .then((response) => response.json())
    .then((data) => createSingleUserInfo(data));
}
usersBtnEl.addEventListener("click", getUsers);

//is gautu duomenu sugeneruoti li elementus (button)
//sugeneruoti ol el, is sudeti i ji li elementus. ol el patalpinti appEl
function generateUsersList(usersArr) {
  appEl.innerHTML = null;
  const olEl = document.createElement("ol");
  //suksim cikla per arr ir juos desim i ol
  usersArr.forEach((uObj) => {
    const madeLi = makeOneLi(uObj.id, uObj.name, uObj.email, uObj.company.name);
    olEl.append(madeLi);
  });
  appEl.append(olEl);
}

function makeOneLi(id, name, email, companyName) {
  const liEl = document.createElement("li");
  liEl.textContent = `${name}    ${email}    ${companyName}`;
  const btnEl = document.createElement(`button`);
  btnEl.textContent = "more info";
  btnEl.addEventListener("click", () => getSingleUser(id));
  liEl.append(btnEl);
  return liEl;
}

function getSingleUser(id) {
  console.log("getSingleUser", id);
  //parsisiusti vartotojo duomenis
  singleUserData(id);
  //susikurti korteles el,
  //supildyti vartotojo duomenimis
}

function createSingleUserInfo(uObj) {
  const cardHtml = `
    <div class="card">
            <h3>${uObj.name}</h3>
            <p>Address: street: ${uObj.address.street} town:${uObj.address.city} zip: ${uObj.address.zipcode} </p>
            <p>tel: ${uObj.phone}</p>
            <h4>${uObj.company.catchPhrase}</h4>
        </div>`;
  appEl.insertAdjacentHTML("afterbegin", cardHtml);
}

// mygtuko 'read more' paspaudimu parsiunciam tik nurodyto vartotojo info

// atvaizduojam papildomoj korteleje virs saraso
// 1. paspaudus mygtuka atspausdinkite to vartotojo id ant kurio paspausta.
// 2. turedami id parisiuskite su papildomu fetch info apie ta vartotoja
// 3. sukurti ir supildyti vartotojo korteles info.
// 4. atvaizduojam varda, addreso, gatve, miesta ir zip koda, telefona ir catchphrase

usersSortBtnEl.addEventListener("click", () => getUsers(true));
