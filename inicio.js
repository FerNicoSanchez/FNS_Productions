function obtenerElementos() {
  let datos = localStorage.getItem("datos_ingresados");
  if (!datos) {
    localStorage.setItem("datos_ingresados", JSON.stringify([]));
  } else {
    cargarTabla(datos);
  }
}
addEventListener("DOMContentLoaded", obtenerElementos()); //Al cargar el DOM ejecuta la función.

let id = parseInt(localStorage.getItem("table_id"));
if (!id) {
  localStorage.setItem("table_id", "0");
  id = 0;
}
let count_forms = parseInt(localStorage.getItem("cant_filas_form"));
if (!count_forms) {
  localStorage.setItem("cant_filas_form", "0");
  count_forms = 0;
}

function agregarFila(nombre, edad, tipo, fecha) {
  const tabla_final = document.getElementById("tabla_final");
  const fila = tabla_final.insertRow();
  fila.setAttribute("id", ++id);
  fila.setAttribute("class", "fila_tabla_final");
  localStorage.setItem("table_id", id.toString());
  fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${tipo}</td>
        <td>${fecha}</td>
        <td class="td_btn_eliminar"></td>
    `;
  const boton_eliminar = document.createElement("button");
  boton_eliminar.classList.add("boton_eliminar");
  boton_eliminar.innerText = "Borrar";
  boton_eliminar.onclick = function () {
    eliminarFila(fila.getAttribute("id"));
  };
  fila.children[4].appendChild(boton_eliminar);
  let datosTabla = JSON.parse(localStorage.getItem("datos_ingresados"));
  const datosFila = {
    id: id,
    nombre: nombre,
    edad: edad,
    tipo: tipo,
    fecha: fecha,
  };
  datosTabla.push(datosFila);
  localStorage.setItem("datos_ingresados", JSON.stringify(datosTabla));
}

function eliminarFila(id) {
  document.getElementById(id).remove();
  let datosTabla = JSON.parse(localStorage.getItem("datos_ingresados"));
  for (let i = 0; i < datosTabla.length; i++) {
    console.log(datosTabla[i]);
    if (datosTabla[i].id === parseInt(id)) {
      datosTabla.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("datos_ingresados", JSON.stringify(datosTabla));
}

function cargarTabla(datos) {
  const tabla_final = document.getElementById("tabla_final");
  datos = JSON.parse(datos);
  datos.forEach((dato) => {
    const fila = tabla_final.insertRow();
    fila.setAttribute("id", dato.id);
    fila.setAttribute("class", "fila_tabla_final");
    fila.innerHTML = `
        <td>${dato.nombre}</td>
        <td>${dato.edad}</td>
        <td>${dato.tipo}</td>
        <td>${dato.fecha}</td>
        <td class="td_btn_eliminar"></td>
    `;
    const boton_eliminar = document.createElement("button");
    boton_eliminar.classList.add("boton_eliminar");
    boton_eliminar.innerText = "Borrar";
    boton_eliminar.onclick = function () {
      eliminarFila(fila.getAttribute("id"));
    };
    fila.children[4].appendChild(boton_eliminar);
  });
}

function enviarForm(evento) {
  evento.preventDefault();
  let fecha = new Date().toLocaleDateString("es-AR");
  const data = {
    nombre: evento.target.nombre_form.value,
    edad: evento.target.edad_form.value,
    tipo: evento.target.tipo_form.value,
    fecha: fecha
  };
  let msg = data.nombre + ", gracias por contactarte con FNS Productions! " + data.fecha;
  if (data.tipo) {
    msg += "\nTipo de contacto: " + data.tipo;
  }
  let cant_form = parseInt(localStorage.getItem("cant_filas_form"));
  msg += "\nEnvios: " + ++cant_form;
  localStorage.setItem("cant_filas_form", cant_form.toString());
  alert(msg);
  agregarFila(data.nombre, data.edad, data.tipo, data.fecha);
  const leyenda = document.getElementById("prueba_leyenda");
  leyenda.innerText = `Formularios enviados: ${++count_forms}`;

  fetch("https://script.google.com/macros/s/AKfycbxLiy7iY-QioSXUVCQ3szs2KabxkpsavT6l9_cwxPWjt9RhsMZCwGBRTnNap2khLbR81Q/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert("Datos guardados en Google Sheets.");
      } else {
        alert("Error al guardar los datos.");
      }
    })
    .catch((error) => {
      alert("Error: " + error);
    });
};

const form = document.getElementById("form_i");

form.addEventListener("submit", enviarForm);
