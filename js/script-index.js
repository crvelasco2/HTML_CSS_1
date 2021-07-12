//Arreglo de Objetos
var libros= [];

/*var persona={
    "name" : "Diego",
    "edad" : "40",
    "lugar" : "Latacunga"
}*/

function imprimir(){
    console.log(libros)
    let tbLibros = document.getElementById('tblCategorias');
    tbLibros.innerHTML='';
    libros.forEach((x) => {

        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        let tdCat = document.createElement('td');
        let tdEdi = document.createElement('td');
        let tdNom = document.createElement('td');
        let tdCan = document.createElement('td');
        

        //Asignar los valores a las columnas

        tdNum.innerText = libros.indexOf(x) + 1;
        tdCat.innerText = x.categoria;
        tdEdi.innerText = x.editorial;
        tdNom.innerText = x.nombre;
        tdCan.innerText = x.cantidad;
        
        //Agregar las columnas a la fila
        tr.append(tdNum);
        tr.append(tdCat);
        tr.append(tdEdi);
        tr.append(tdNom);
        tr.append(tdCan);
        tbLibros.append(tr);
    });
    
    sumarCantidad();
}

function agregar(){
    //Lectura de valores en los Inputs
    let catg = document.getElementById('slCategoria').value;
    let edit = document.getElementById('slEditorial').value;
    let nomb = document.getElementById('txtNombre').value;
    let cant = document.getElementById('txtCantidad').value;
    
    //Crear un objeto con los valores
    let nuevoLibro = {
        "categoria" : catg,
        "editorial" : edit,
        "nombre" : nomb,
        "cantidad" : parseInt(cant),
        
    };
    //Agregar el objeto al arreglo
    libros.push(nuevoLibro);
    reset();
    imprimir();
    
}

function reset(){
    document.getElementById('slCategoria').value=0;
    document.getElementById('slEditorial').value=0;
    document.getElementById('txtNombre').value=0;
    document.getElementById('txtCantidad').value=0;
   
    
}

function sumarCantidad(){
    let totalCantidad = 0;
    libros.forEach((x)=>{
        totalCantidad = totalCantidad + x.cantidad;
    });
    let tdTotalCantidad = document.getElementById('tdTotalProbables');
    tdTotalCantidad.innerText = totalCantidad;
}