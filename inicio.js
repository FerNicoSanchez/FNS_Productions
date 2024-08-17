function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Informacion en dialogs.

const img_estudios = document.getElementById("image_estudios");

img_estudios.addEventListener("click", () => {
  const dialog = document.getElementById("dialog_estudios");
  dialog.showModal();
})

const img_expLaboral = document.getElementById("image_expLaboral");

img_expLaboral.addEventListener("click", () => {
  const dialog = document.getElementById("dialog_expLaboral");
  dialog.showModal();
})
const img_proyectos = document.getElementById("image_proyectos");

img_proyectos.addEventListener("click", () => {
  const dialog = document.getElementById("dialog_proyectos");
  dialog.showModal();
})

const boton_atribuciones = document.getElementById("boton_atribuciones");

boton_atribuciones.addEventListener("click", () => {
  const dialog = document.getElementById("dialog_atribuciones");
  dialog.showModal();
})
//Fin dialogs

//Botones de dialogs

//Estudios
const ampliar_info = document.querySelector("#ampliar_info");

ampliar_info.addEventListener("click", () => {
  const container_estudios = document.querySelector(".container_estudios");
  const detalles = document.querySelector(".container_estudios-detalles");
  container_estudios.style.animation = "desaparecer 2s forwards";
  detalles.style.display = "block";
  detalles.style.animation = "aparecer 4s forwards";
})

const reducir_info = document.querySelector("#reducir_info");

reducir_info.addEventListener("click", () => {
  const container_estudios = document.querySelector(".container_estudios");
  const detalles = document.querySelector(".container_estudios-detalles");
  detalles.style.animation = "desaparecer 2s forwards";
  container_estudios.style.display = "block";
  container_estudios.style.animation = "aparecer 4s forwards";
})


//Exp Laboral

const boton_detalle_expLaboral = document.querySelector("#button-detalles_expLaboral");

boton_detalle_expLaboral.addEventListener("click", () => {
  const container = document.querySelector(".exp_laboral_container");
  const div_detalles = document.querySelector(".dialog_div_expLaboral-detalles");
  div_detalles.style.display = "block";
  container.style.animation = "desp_izq 4s forwards";

  //Opcion alternativa
  // const div_expLaboral = document.querySelector(".dialog_div_expLaboral");
  // div_expLaboral.style.animation = "desplazamiento1 3s";
  // setTimeout( () => {
  //   div_expLaboral.style.animation = "none";
  //   div_expLaboral.style.display = "none";
  // },3500);
})

const boton_resumen_expLaboral = document.querySelector("#button-detalles_expLaboral-2");

boton_resumen_expLaboral.addEventListener("click", () => {
  const container = document.querySelector(".exp_laboral_container");
  const div_detalles = document.querySelector(".dialog_div_expLaboral-detalles");
  container.style.animation = "desp_der 4s";
  setTimeout( () => {
    div_detalles.style.display = "none";
  },4100)
})