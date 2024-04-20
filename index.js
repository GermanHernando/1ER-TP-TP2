// const fs = require('fs');
// const file = fs.createReadStream("data.txt") 

const fs = require("fs");

let array1 = [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1,"python", 12, "ruby", "php", false];

try {
    const file = fs.createWriteStream("archivo.txt");
    file.write(array1.join('\n'));
    file.end();
    console.log("El archivo se ha creado correctamente.");
} catch (error) {
    console.log("Ha ocurrido un error: ", error);
}

let condicionValida = (condicion) => {
    let isValid = true;
    if (condicion === null || typeof condicion === 'undefined') {
        console.log("Error: La condición no es válida.");
        isValid = false;
    } 
    return isValid;
}

function filtrarArray(array, condicion) {
    let arrayResultado = [];
    if (condicionValida(condicion)) {
        arrayResultado = array.filter(item => typeof item === condicion);
    }
    return arrayResultado;
}

function ordenarArrayAscendente(array) {
    return array.sort((a, b) => a - b);
}

function escribirEnArchivo(array) {
    if (array.length > 0) {
        fs.writeFileSync('archivo.txt', array.join('\n'));
        return "El array se creó y se guardó en archivo.txt";
    } else {
        return "No se cumple con la condición para crear el archivo";
    }
}

//Probando condicion
const pruebaCondicion = "string";
console.log(escribirEnArchivo(ordenarArrayAscendente(filtrarArray(array1, pruebaCondicion))));
