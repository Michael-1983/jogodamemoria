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
    let p = Math.floor(Math.random() * imagens.length);
    let aux = imagens[p];
    imagens[p] = imagens[i];
    imagens[i] = aux;
  }

  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.onclick = trataCliqueImagem;
  });
};
let fundo =
  "data:image/png;base64,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";

/*pega o atributo "data-valor"*/
let cont = 0;
let srcImagem1 = "";
const trataCliqueImagem = (e) => {
  console.log(e);
  e.stopPropagation();
  e.preventDefault();

  if (cont === 0) {
    const p = +e.target.getAttribute("data-valor");
    e.target.src = imagens[p];
    srcImagem1 = e.target;
    cont++;
    return;
  } else if (cont === 1) {
    if (srcImagem1.src === e.target.src) {
      const p = +e.target.getAttribute("data-valor");
      e.target.src = imagens[p];
      srcImagem1.onclick = null;
      e.target.onclick = null;
      return;
    } else if (srcImagem1.src !== e.target.src) {
      const p = +e.target.getAttribute("data-valor");
      e.target.src = imagens[p];
      setTimeout(() => {
        cont = 0;
        e.target.src = fundo;
        srcImagem1.src = fundo;
      }, 1000);
      return;
    }
  }
};
