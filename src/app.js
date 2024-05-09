const sujeto = ["Mi perro", "Mi gato", "Mi hermano", "Mi vecino", "Mi jefe"];
const accion = ["se comió", "destruyó", "escondió", "rompió", "olvidó"];
const objeto = ["mi tarea", "mi almuerzo", "mi teléfono", "mis llaves", "mi computadora"];

function generarExcusa() {
    const excusa = `${elegirAleatorio(sujeto)} ${elegirAleatorio(accion)} ${elegirAleatorio(objeto)}.`;
    document.getElementById("excusa").textContent = excusa;
}

function elegirAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}
