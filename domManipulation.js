let pElement = document.getElementById('pFirst');
pElement.innerHTML = "Hello World Inside Javascript dom manipulator";
pElement.innerText = " Hello world under the wood";
pElement.textContent = "Lets see what you got";
pElement.style.color = "rgb(56,189,123)";
let pElementByTag = document.getElementsByTagName("p");
pElementByTag[0].innerHTML = "This is very rediculous i must say";
pElementByTag.innerText = "Well Well";
pElement.innerHTML = "lets see " + pElementByTag[1].innerHTML;
pElementByTag[0].innerHTML = "Hi";
let pElementClass = document.getElementsByClassName("pSecond");
pElementClass.innerHTML = "<strong>What a wonderful class</strong>";
let listElements = document.getElementById('List');
function displayDate(){
    //document.write(Date());
    let dateTime = Date();
    pElement.innerHTML = dateTime;
}

function displayTimeOnload(){
    let dateTime =Date();
    let pElementThird = document.getElementById("pThird");
    pElementThird.innerHTML = dateTime;
    console.log("loaded");

}

function displayTimeOnly() {
    document.getElementById('pThird').innerHTML = "Hello There ,what time it is ?";
}
let counter = 0;
function displayAdd(){
  counter += 1;
  document.getElementById('pThird').innerHTML = counter;
}

let recLength = 10;
let recWidth = 5;
function recArea(p, y) {
    document.getElementById('pThird').innerHTML = p*y;
    return p * y;
}
//document.getElementById(pThird).innerHTML = recArea;
const myButton = document.getElementById("submit").onclick = displayDate;
const onMyLoad = document.getElementsByTagName('body').onload = displayTimeOnload;
const myButton2 = document.getElementById("submit1").addEventListener("click" ,displayTimeOnly);
const myButton3 = document.getElementById("submit2").addEventListener("mouseover", function(){recArea(recLength, recWidth)});
const myButton4 = document.getElementById("submit2").addEventListener("mouseout", displayAdd);
let x = document.getElementById("List").childElementCount;
console.log(x);
for(let i = 1; i < 11; i++){
    if((i % 2) == 1){
    console.log(document.getElementById('List').firstChild);}
}
console.log(document.querySelectorAll('List'));
let y = document.querySelectorAll('List');
console.log(y.length);