var personas = ['Ricardo','Lissete','Rommel','Viviana','Angel','David','Luis','Kenneth'];

function imprimirPersonas(){
    document.getElementById('arrPersonas').innerText = personas;
    document.getElementById('arrPersonas').append(" el arreglo tiene " + personas.length + " elementos");
}

function imprimirNuevo(nuevo){
    document.getElementById('arrNuevo').innerText = nuevo;
    document.getElementById('arrNuevo').append(" el arreglo tiene " + nuevo.length + " elementos");
}

function pushPersonas(){
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var numero_elementos = personas.push(nombre);   
    console.log("# de elementos en el arreglo => " + numero_elementos);
    input.value = "";
    imprimirPersonas();
}

function popPersonas(){
    var eliminado = personas.pop();
    console.log("Elemento eliminado => " + eliminado);
    imprimirPersonas();
}

function ushiftPersonas(){
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var numero_elementos = personas.unshift(nombre);   
    console.log("# de elementos en el arreglo => " + numero_elementos);
    input.value = "";
    imprimirPersonas();
}

function shiftPersonas(){
    var eliminado = personas.shift();
    console.log("Elemento eliminado => " + eliminado);
    imprimirPersonas();
}

function slicePersonas(){
    var strInicio = document.getElementById('txtInicio').value;
    var strFin = document.getElementById('txtFinal').value;
    var intInicio = parseInt(strInicio);
    var intFin = parseInt(strFin);
    var nuevoArregloPersonas = personas.slice(intInicio, intFin);
    imprimirNuevo(nuevoArregloPersonas);
    imprimirPersonas();
}

function splicePersonas(){
    var strInicio = document.getElementById('txtInicioSplice').value;
    var strNum = document.getElementById('txtNumSplice').value;
    var intInicio = parseInt(strInicio);
    var intNum = parseInt(strNum);
    var nuevoArregloPersonas = personas.splice(intInicio, intNum);    
    imprimirNuevo(nuevoArregloPersonas);
    imprimirPersonas();
}

function splicePlusPersonas()
{
    var strInicio = document.getElementById('txtInicioSplice').value;
    var strNum = document.getElementById('txtNumSplice').value;
    var intInicio = parseInt(strInicio);
    var intNum = parseInt(strNum);
    var input = document.getElementById('txtNombre');
    var nombre = input.value;
    var nuevoArregloPersonas = personas.splice(intInicio, intNum, nombre);    
    imprimirNuevo(nuevoArregloPersonas);
    imprimirPersonas();
}


function joinPersonas()
{
    var sep = document.getElementById('txtSep').value;
    var resultado = personas.join(sep);    
    imprimirNuevo(resultado);
}

function arrayDesde(){
    var sep = document.getElementById('txtSep').value;
    var resultado = Array.from(sep);    
    imprimirNuevo(resultado);
}

function includesPersonas(){
    var valorABuscar = document.getElementById('txtCriterioBusqueda').value;
    var encontrado = personas.includes(valorABuscar);
    document.getElementById('arrResultado').innerText = "Encontrado =>" + encontrado;
}

function indexOfPersonas(){
    var valorABuscar = document.getElementById('txtCriterioBusqueda').value;
    var encontrado = personas.indexOf(valorABuscar);
    document.getElementById('arrResultado').innerText = "Encontrado en =>" + encontrado;
}

function lastIndexOfPersonas(){
    var valorABuscar = document.getElementById('txtCriterioBusqueda').value;
    var encontrado = personas.lastIndexOf(valorABuscar);
    document.getElementById('arrResultado').innerText = "Encontrado en =>" + encontrado;
}

function sortPersonas(){
    personas.sort();
    imprimirPersonas();
}

function reversePersonas(){
    personas.reverse();
    imprimirPersonas();
}