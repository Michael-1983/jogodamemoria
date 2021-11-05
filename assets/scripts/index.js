let imagens = [];

for (let i = 0; i < 1; i++) {
  imagens.push(`./assets/images/ale.jpg`);
  imagens.push("./assets/images/ale.jpg");
  imagens.push(`./assets/images/Alissa.jpg`);
  imagens.push("./assets/images/Alissa.jpg");
  imagens.push(`./assets/images/Anna.jpg`);
  imagens.push("./assets/images/Anna.jpg");
  imagens.push(`./assets/images/Caio.jpg`);
  imagens.push("./assets/images/Caio.jpg");
  imagens.push(`./assets/images/Edgar.jpg`);
  imagens.push("./assets/images/Edgar.jpg");
  imagens.push(`./assets/images/Elizeu.jpg`);
  imagens.push("./assets/images/Elizeu.jpg");
  imagens.push(`./assets/images/Guilherme.jpg`);
  imagens.push("./assets/images/Guilherme.jpg");
  imagens.push(`./assets/images/Gustavo.jpg`);
  imagens.push("./assets/images/Gustavo.jpg");
  imagens.push(`./assets/images/Karen.jpg`);
  imagens.push("./assets/images/Karen.jpg");
  imagens.push(`./assets/images/Mano.jpg`);
  imagens.push("./assets/images/Mano.jpg");
  imagens.push(`./assets/images/Pedro.jpg`);
  imagens.push("./assets/images/Pedro.jpg");
  imagens.push(`./assets/images/Simone.jpg`);
  imagens.push("./assets/images/Simone.jpg");
}
let cartas = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const onload = () => {
  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.src = fundo;
    img.setAttribute("data-valor", i);
  });
};

function ocultar() {
  document.getElementById("caixinhaText").style.display = "none";
}
function reexibir() {
  document.getElementById("cerebro-pensando").classList.remove("ocultar");
}
