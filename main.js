const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector(".screen1 .card figure");
const resetButton = document.getElementById("open-again");

let fortune = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento",
];

document.addEventListener("keypress", handleEnter);
resetButton.addEventListener("click", resetButtonClick);
fortuneCookie.addEventListener("click", toogleVisibility);

function toogleVisibility() {
  switchScreen();
  randomFortune();
}

function resetButtonClick() {
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}

function switchScreen() {
  screen2.classList.remove("hide");
  screen1.classList.add("hide");
}

function randomFortune() {
  let allPhrases = fortune.length;
  let randomPhrases = Math.floor(Math.random() * allPhrases);

  screen2.querySelector("p").textContent = `${fortune[randomPhrases]}`;
}

function handleEnter(event){
  if(event.key == 'Enter' && screen2.classList.contains('hide')){
    switchScreen()
    randomFortune()
  } else if (event.key == 'Enter' && screen1.classList.contains("hide")){
    resetButtonClick()
  }
}