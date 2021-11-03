let imagens = [];

for (let i = 1; i <= 12; i++) {
  imagens.push(`http://picsum.photos/id/${i}/250`);
}
let fundo = "https://picsum.photos/250?grayscale";
let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

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

/* vira o titulo em 180 graus */
document.querySelector("#myCard").classList.toggle("flip");
