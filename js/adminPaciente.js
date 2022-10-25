
import { Paciente } from "./Paciente.js";
import { validateDni, validateName, validateNumber } from "./validators.js";

// const buttonCargar = document.getElementById("buttonCargar");

let obraSocial = [
  "Ninguna",
  "Subsidio de Salud",
  "Swiss Medical",
  "Red de Seguros Médicos",
  "Prensa",
  "OSDE",
  "Otra",
];

let pacientesLS = localStorage.getItem("pacientes");
pacientesLS = JSON.parse(pacientesLS);
console.log(pacientesLS);

let pacientes = [];

if (pacientesLS != null) {
  pacientes = pacientesLS;
  pacientes.forEach((elemento)=>{
    listarPaciente(elemento);
  })
}

obraSocial.forEach((obra) => {
  let opcion = document.createElement("option");
  opcion.value = `${obra}`;
  opcion.innerText = `${obra}`;
  document.getElementById("selectObraSocial").appendChild(opcion);
});

const formularioPac = document.getElementById("formPaciente");

const campoNombre = document.getElementById("nombre");
const campoDni = document.getElementById("dni");
const campoFechaNac = document.getElementById("fechaNac");
const campoTelefono = document.getElementById("telefono");
const campoObraSocial = document.getElementById("selectObraSocial");

let nombre = "";
let dni = "";
let fechaNac = "";
let telefono = "";
let obraSocial1 = "";

campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoNombre)) {
    nombre = e.target.value;
  }
});
campoDni.addEventListener("blur", (e) => {
  if (validateDni(e.target.value, campoDni)) {
    dni = e.target.value;
  }
});
campoFechaNac.addEventListener("blur", (e) => {
  fechaNac = e.target.value;
});
campoTelefono.addEventListener("blur", (e) => {
  if (validateNumber(e.target.value, campoTelefono)) {
    telefono = e.target.value;
  }
});
campoObraSocial.addEventListener("blur", (e) => {
  obraSocial1 = e.target.value;
});

//agregar pacientes al LS
const agregarPacienteALS = (paciente) => {
  pacientes.unshift(paciente);
    const pacienteJSON= JSON.stringify(pacientes);
    
    localStorage.setItem("pacientes", pacienteJSON);
}

//agregar pacientes
formularioPac.addEventListener("submit", (e) => {
  e.preventDefault();

  nombre = campoNombre.value;
  dni = campoDni.value;
  fechaNac = campoFechaNac.value;
  telefono = campoTelefono.value;
  obraSocial1 = campoObraSocial.value;

  let paciente = new Paciente(nombre, dni, fechaNac, telefono, obraSocial1);

  if (
    validateName(nombre, campoNombre) &&
    validateDni(dni, campoDni) &&
    validateNumber(telefono, campoTelefono)
  ) {
    alert("paciente guardado");
    document.getElementById("formPaciente").reset();
    
    agregarPacienteALS(paciente);
    listarPaciente();
  }
});

//listar pacientes
const listarPaciente = () => {
  //document.getElementById("tbody_paciente").innerHTML = "";
  pacientes.forEach((paciente) => {
    const tr = document.createElement("tr");
//<td>${paciente.calcularEdad()}</td>
    const datos = `<td>${paciente.nombre}</td>
    <td>${paciente.dni}</td>
    <td>${paciente.dni}</td>
    <td>${paciente.fechaNac}</td>
    <td>${paciente.telefono}</td>
    <td>${paciente.obraSocial}</td>
    <td><button class="btn btn-warning" onclick="deleteBook()">Editar</button></td>
    <td><button class="btn btn-danger" onclick="deleteBook()">Eliminar</button></td>`;

    tr.innerHTML = datos;
    document.getElementById("tbody_paciente").appendChild(tr);
    
  });
  document.getElementById("cantPac").innerText = pacientes.length;
};
//document.getElementById("formPaciente").addEventListener("submit", agregarPaciente);

//listarPaciente();
// const recargarDatos = () => {
//   const pacientesLS = JSON.parse(localStorage.getItem("pacientes"));

//   pacientesLS.forEach((elemento) => {
//     listarPaciente(elemento);
//   });
// };

// campoNombre.addEventListener("blur", (e) => {
//   if (validateName(e.target.value, campoNombre)) {
//     nombre = e.target.value;
//   }
// });
// campoDni.addEventListener("blur", (e) => {
//   if (validateDni(e.target.value, campoDni)) {
//     dni = e.target.value;
//   }
// });
// campoFechaNac.addEventListener("blur", (e) => {
//   fechaNac = e.target.value;
// });
// campoTelefono.addEventListener("blur", (e) => {
//   if (validateNumber(e.target.value, campoTelefono)) {
//     telefono = e.target.value;
//   }
// });
// campoObraSocial.addEventListener("blur", (e) => {
//   obraSocial = e.target.value;
// });
