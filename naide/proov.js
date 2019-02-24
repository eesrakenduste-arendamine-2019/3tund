/*jshint esversion:6*/
let fname;
let lname;
let email;
let saveButton;
let loadButton;
let deleteButton;
let dataContainer;
window.onload = function(){
  init();
  console.log("leht laetud");
};

function init(){
  fname = document.querySelector('#fname');
  lname = document.querySelector('#lname');
  email = document.querySelector('#email');
  saveButton = document.querySelector('#saveLocal');
  loadButton = document.querySelector('#loadLocal');
  deleteButton = document.querySelector('#deleteLocal');
  dataContainer = document.querySelector('#dataContainer');

  saveButton.addEventListener('click', saveLocal);
  loadButton.addEventListener('click', loadLocal);
  deleteButton.addEventListener('click', deleteLocal);
}

function saveLocal(){
  if(fname.value.length > 0 && lname.value.length > 0 && email.value.length > 0){
    let obj = {
      firstName: fname.value,
      lastName: lname.value,
      email: email.value
    };
    localStorage.setItem('data', JSON.stringify(obj));
    fname.value = "";
    lname.value = "";
    email.value = "";
    dataContainer.innerHTML = "Andmed edukalt salvestatud!";
  } else{
    window.alert("Eesnimi, Perekonnanimi ja E-mail on kohustuslikud väljad!");
  }
}

function loadLocal(){
  const localData = localStorage.getItem('data');
  if(localData){
    const data = JSON.parse(localStorage.getItem('data'));
    dataContainer.innerHTML = `<strong>Eesnimi:</strong> ${data.firstName}<br> <strong>Perenimi:</strong> ${data.lastName}<br><strong>E-post:</strong> ${data.email}`;
  } else{
    dataContainer.innerHTML = "Pole andmeid, mida laadida! Palun salvesta enne andmed!";
  }
}

function deleteLocal(){
  const localData = localStorage.getItem('data');
  if(localData){
    localStorage.removeItem('data');
    fname.value = "";
    lname.value = "";
    email.value = "";
    dataContainer.innerHTML = "Andmed edukalt kustutatud!";
  }else{
    dataContainer.innerHTML = "Pole andmeid, mida kustutada! Palun salvesta andmed!";
  }
}
