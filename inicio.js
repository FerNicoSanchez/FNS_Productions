function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Registro de Descargas de CV

function actualizarBBDD_cv() {
  const optionFecha = { year: 'numeric' , month: '2-digit' , day: '2-digit'};
  const optionHora = { hour: '2-digit', minute: '2-digit', second: '2-digit'};

  const now = new Date();

  const date = new Intl.DateTimeFormat('es-AR', optionFecha).format(now);
  const time = new Intl.DateTimeFormat('es-AR', optionHora).format(now);

  
  const data = { 
    fecha: date, 
    hora: time
  };
  
  console.log("Fecha:", data.fecha);
  console.log("Hora:", data.hora);

  fetch('https://script.google.com/macros/s/AKfycbwLaJNxtQwBHxVrvE06xjygJImXu4AGpf46Qrfw9HowZTrbupPZQq_CCcmrD37xkH-rSg/exec', {
      method: 'POST',
      mode:  'no-cors',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .catch((error) => {
      console.log("Error: " + error);
      });

  window.open('fernando_sanchez_2025.pdf', '_blank');
};

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

const temporal_proyectos = document.querySelectorAll(".ir_al_proyecto");

temporal_proyectos.forEach(a => {
  a.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Proximamente...\nLa APP ya fue creada y se esta trabajando en los videos tutoriales.")
  })
})