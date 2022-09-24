
let mysteryButton = document.getElementById('mysteryButton');
let background = document.getElementsByClassName('color')[0];
let scrollButton = document.getElementById('scrollButton');

let hiddenCat = document.getElementById('showLater');
let showButton = document.getElementById('showButton');
let hidingButton = document.getElementById('hidingButton');
let defaultsurpriseContainer = document.getElementById('defaultShow');

let header = document.getElementById('header');
hiddenCat.style.display= 'none';

function colorValue() {
    return Math.floor(Math.random() * 256);
  }

function colorValue2() {
    return Math.floor(Math.random() * 256);
  }
  
  function colorChange(){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    let randomColor2 = 'rgb(' + colorValue2() + ',' + colorValue2() + ',' + colorValue2() + ')';
    background.style.backgroundColor = randomColor;
    header.style.color= randomColor2;
  };
  
  mysteryButton.addEventListener('click', colorChange);

  scrollButton.addEventListener('wheel', colorChange);

function showCat(){
hiddenCat.style.display = 'flex';
defaultsurpriseContainer.style.display = 'none';

};

function reset(){
    hiddenCat.style.display = 'none';
    defaultsurpriseContainer.style.display = '';
  };


  showButton.onclick = showCat;
  hidingButton.onclick = reset;



  
  

const form = document.querySelector("#chatboxForm");
const input = document.querySelector("input");
const ul = document.querySelector("#chatList");




var img = document.getElementById("catlogo");



function createLi(){
  const li = document.createElement("li");
  const span = document.createElement('span');
  const newimg= document.createElement('img');


  span.textContent = input.value;
  newimg.src= img.getAttribute("src");
  newimg.height="50";
  newimg.width="70";
  
  
  const ul = document.querySelector("#chatList");
  li.appendChild(newimg);
  li.appendChild(span);
  return li;
  };



form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const li = createLi();
    ul.appendChild(li);
    document.querySelector('input').value=""
    
});



