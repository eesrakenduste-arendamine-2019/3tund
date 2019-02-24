/*jshint esversion:6*/
let input;
let timer;

window.onload = function(){
  //console.log("leht on laetud");

  document.querySelector('#saveLocal').addEventListener('click', saveLocal);
  document.querySelector('#deleteLocal').addEventListener('click', deleteLocal);

  window.addEventListener('keypress', autosave);

  input = document.querySelector('#textInput');

  const localValue = localStorage.getItem('textInput');

  if(localValue){
    input.value = JSON.parse(localValue).text;
  }
};

function autosave(){
  if(timer){
    clearTimeout(timer);
  }
  timer = window.setTimeout(function(){
    saveLocal();
    console.log("autosave");
  }, 2000);
}

function saveLocal(){
  let obj = {
    text: input.value,
    name: "Tauri",
    date: new Date()
  };
  localStorage.setItem('textInput', JSON.stringify(obj));
}

function deleteLocal(){
  localStorage.removeItem('textInput');
  input.value = "";
}
