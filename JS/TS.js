function capturar() {
    const ambientes = document.getElementById("n_ambientes").value;
    const localidad = document.getElementById("ciudad_localidad").value;
    const vivienda = document.getElementById("casa_departamento").value;
    let resultado1 = costoDeAmbientes[ambientes];
    let resultado2 = costoDeCiudad[localidad];
    let resultado3 = costoDeVivienda[vivienda];
    let resultadoTotal = resultado1 + resultado2 + resultado3;
    document.getElementById("result").value = resultadoTotal;
    localStorage.setItem("Valor Total",JSON.stringify(resultadoTotal));
    document.getElementById("ambientes2").innerHTML = resultado1
    document.getElementById("vivienda2").innerHTML = resultado3
    document.getElementById("ciudad2").innerHTML = resultado2
    document.getElementById("demoSelect").innerHTML = resultadoTotal
}
//ARRAYS
const costoDeAmbientes = [1000, 2000, 3000, 4000];
    //costoDeAmbientes.forEach(e => console.log(e))

const costoDeCiudad = [1500, 2000, 2500, 3000];
    //costoDeCiudad.forEach(e => console.log(e))

const costoDeVivienda = [4000, 2000];
    //costoDeVivienda.forEach(e => console.log(e))
//*******************/
//EVENTOS
/* .preventDefault cancela el evento "submit" */
const form = document.getElementById("formulario");
const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(event.target.total.value);
}
form.addEventListener("submit", enviarFormulario);
//A DAR AL BOTON "CALCULAR" EN EL CONSOLE TE APARECE EL RESULTADO TOTAL DE LA SUMA DE INMUEBLES