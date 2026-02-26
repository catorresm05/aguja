const fondo = document.getElementById("pradera");
const cantidad = 3000;

for (let i = 0; i < cantidad; i++) {
    const pajar = document.createElement("div");
    pajar.classList.add("pajar");

    pajar.style.left = Math.random() * 100 + "vw";

    const altura = Math.random() * 95;
    pajar.style.top = altura + "vh";

    pradera.appendChild(pajar);
}
