/*evento click*/
let startButton = document.getElementById("originalStarButton");
startButton.addEventListener("click", () => {
  play();
  onload();
  ocultar();

  document.querySelector("#originalStarButton").onclick = play;
});

/*embaralha (tráz o índice duplicado e randomizado"let aux") e distribui as cartas*/
const play = () => {
  for (let i = 0; i < cartas.length; i++) {
    let p = Math.trunc(Math.random() * imagens.length);
    let aux = cartas[p];
    cartas[p] = cartas[i];
    cartas[i] = aux;
  }

  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.onclick = trataCliqueImagem;
  });
};

/*pega o atributo "data-valor"*/
const trataCliqueImagem = (e) => {
  console.log("e", e);
  const p = +e.target.getAttribute("data-valor");
  e.target.src = imagens[p];
};
