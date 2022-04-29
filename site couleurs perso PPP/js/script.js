const boutonMoins = document.querySelector('button:nth-of-type(1)');
const boutonPlus = document.querySelector('button:nth-of-type(2)');
const textCorp = document.querySelector('body');
let taille = 1;

boutonMoins.addEventListener('click',()=>{
  if (taille > 0.75){
    taille -= 0.125;
    document.body.style.fontSize = taille + "em";
  }
});

boutonPlus.addEventListener('click',()=>{
  if (taille < 1.25){
    taille += 0.125;
    document.body.style.fontSize = taille + "em";
  }
});

document.querySelector('[type=range]').addEventListener('click', () => {
  document.body.style.backgroundColor = `hsl(${document.querySelector('[type=range]').value}, 50%, 75%)`;
});

let cpt;
let i = 0;
let com = document.querySelectorAll("h4");
let quest = document.querySelectorAll("h2");
const reponses = document.getElementsByTagName("input");
let p = document.querySelector("p");
const bouton = document.getElementById("result");
const boutonen = document.getElementById("languages");
console.log(bouton);
console.log(boutonen);

bouton.addEventListener("click", () => {
  cpt = 0;
  for (reponse of reponses) {
    if (reponse.checked) {
      cpt += 1;
    }
  }
  console.log(cpt);
  if (cpt == 6) {
    com[0].textContent =
      "Code RGB:(255, 0, 0) Code Hexa:#FF0000 Code HSL:(0, 100%, 50%)";
    com[1].textContent =
      "Code RGB:(255, 165, 0) Code Hexa:#FFA500 Code HSL:(39, 100%, 50%)";
    com[2].textContent =
      "Code RGB:(255, 255, 0) Code Hexa:#FFFF00 Code HSL:(60, 100%, 50%)";
    com[3].textContent =
      "Code RGB:(0, 128, 0) Code Hexa:#008000 Code HSL:(120, 100%, 25%)";
    com[4].textContent =
      "Code RGB:(0, 0, 255) Code Hexa:#0000FF Code HSL:(240, 100%, 50%)";
    com[5].textContent =
      "Code RGB:(238, 130, 238) Code Hexa:#EE82EE Code HSL:(300, 100%, 25%)";
    } else if (cpt < 6) {
    window.alert("veuillez cocher tout les couleurs");
  }
  console.log(com[5].textContent);
});



