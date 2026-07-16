const API_URL = "/api";

async function obtenerEdad() {
  const respuesta = await fetch(`${API_URL}/edadjahir`);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener la edad");
  }

  return await respuesta.json();
}

async function obtenerNombre() {
  const respuesta = await fetch(`${API_URL}/nombrecompleto`);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener el nombre");
  }

  return await respuesta.text();
}

async function obtenerProyecto() {
  const respuesta = await fetch(`${API_URL}/proyecto`);

  if (!respuesta.ok) {
    throw new Error("No se pudo obtener el proyecto");
  }

  return await respuesta.text();
}

async function obtenerMaterias() {
  const respuesta = await fetch(`${API_URL}/mismaterias`);

  if (!respuesta.ok) {
    throw new Error("No se pudieron obtener las materias");
  }

  return await respuesta.json();
}

async function mostrarEdad() {
  const elementoEdad = document.getElementById("edad");

  const edadObtenida = await obtenerEdad();

  elementoEdad.textContent = "Edad: " + edadObtenida;
}

async function mostrarProyecto() {
  const elementoProyecto = document.getElementById("proyecto");

  const proyectoObtenido = await obtenerProyecto();

  elementoProyecto.textContent = "Proyecto: " + proyectoObtenido;
}

async function mostrarMaterias() {
  const contenedorMaterias = document.getElementById("materias");

  const materiasObtenidas = await obtenerMaterias();

  contenedorMaterias.innerHTML = `
    <p>Materias:</p>

    ${materiasObtenidas
      .map((materia) => {
        return `<p>${materia}</p>`;
      })
      .join("")}
  `;
}

async function mostrarNombre() {
  const elementoNombre = document.getElementById("nombre");

  const nombreObtenido = await obtenerNombre();

  elementoNombre.innerText = "Nombre: " + nombreObtenido;
}

mostrarEdad();
mostrarProyecto();
mostrarMaterias();
mostrarNombre();
