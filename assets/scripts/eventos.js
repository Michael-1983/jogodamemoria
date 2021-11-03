/*evento click*/
let startButton = document.getElementById("originalStarButton");
startButton.addEventListener("click", () => {
  onload();
  ocultar();
  play();
  document.querySelector("#originalStarButton").onclick = play;
});

/*embaralha (tráz o índice duplicado e randomizado"let aux") e distribui as cartas*/
const play = () => {
  for (let i = 0; i < imagens.length; i++) {
    let p = Math.trunc(Math.random() * imagens.length);
    let aux = imagens[p];
    /*cartas[p] = cartas[i];
    cartas[i] = aux;*/
  }

  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    console.log("img2", i);
    console.log("img3", img);
    img.onclick = trataCliqueImagem;
  });
};

/*pega o atributo "data-valor"*/
const trataCliqueImagem = (e) => {
  console.log("e", e);
  const p = +e.target.getAttribute("data-valor");
  e.target.src = imagens[p];
  console.log("p", imagens);
};
