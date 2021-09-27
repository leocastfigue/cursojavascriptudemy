// tipo de dato string
var nombre = "Leo";

console.log(nombre);

nombre = 10;
console.log( nombre);

// tipo de dato numerico
var numero = "1000";

console.log(numero);

// tipo de dato de objeto
var objeto = {
    nombre : "Leo", 
    apellido : "Castro",
    telefono : "2614685967",
}
console.log(objeto);

// tipo de dato boolean (true,false)
var bandera = true;
console.log(bandera);

// tipo de dato function
function miFuncion(){}
console.log(miFuncion);

// tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

// tipo de clase (las clases son funciones)
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
} 
console.log(Persona);

// tipo de dato undefined
var x;
console.log(x);

// null 
var y = null;
console.log(y); 

// arrays (es un tipo de dato object)
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// valores vacios
var z = "";
console.log(z)
console.log(typeof z);

// concatenacion de cadenas
var nombre = "Leo";
var apellido = "Castro";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Leonardo" + " " + "Castro";
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

x = nombre +(2 + 4);
console.log(x);
x = 2 + 4 + nombre;
console.log(x);

