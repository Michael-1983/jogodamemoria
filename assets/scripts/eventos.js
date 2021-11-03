let startButton = document.getElementById("originalStarButton");
startButton.addEventListener("click", () => {
  onload();
  ocultar();
  document.querySelector("#jogar").onclick = play;
});

const play = () => {
  for (let i = 0; i < cartas.length; i++) {
    let p = Math.trunc(Math.random() * cartas.length);
    let aux = cartas[p];
    cartas[p] = cartas[i];
    cartas[i] = aux;
  }
  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.onclick = trataCliqueImagem;
    img.style.opacity = 1;
  });
};
const trataCliqueImagem = (e) => {};
const p = +e.target.getAttribute("data-valor");
e.target.src = imagens[p];
