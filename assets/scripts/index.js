let imagens = [];
for (let i = 1; i <= 8; i++) {
  imagens.push(`http://picsum.photos/id/${i}/80`);
}
let fundo = "https://picsum.photos/80?grayscale";

const onload = () => {
  let elemImages = document.querySelectorAll("#memoria img");
  elemImages.forEach((img, i) => {
    img.src = fundo;
  });
};
