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


