let numeroaadivinar = 0; // se declara fuera

const comenzarJuego = () => {
  const sectionComenzar = document.getElementsByTagName("section");
  sectionComenzar[0].classList.add("d-none");
  sectionComenzar[1].classList.remove("d-none");

  // Generamos el número a adivinar una sola vez
  numeroaadivinar = Math.floor(Math.random() * 11);
  console.log("Número a adivinar:", numeroaadivinar);
};

const adivinarNumero = (e) => {
  e.preventDefault();
  const numeroadivinado = parseInt(document.getElementById("inputAdivinar").value);

  if (numeroaadivinar === numeroadivinado) {
    alert("¡ADIVINASTE!");
  } else if (numeroaadivinar < numeroadivinado) {
    alert("No es el número correcto, el número es más bajo");
  } else {
    alert("No es el número correcto, el número es más alto");
  }
};

const btnFormulario = document.getElementById("miform")


btnFormulario.addEventListener("submit",adivinarNumero)