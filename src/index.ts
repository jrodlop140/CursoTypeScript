console.log("Hola Mundo");

/**
 * Tipos de datos:
 * 
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */
var var1: boolean = true;
var var2: string = "Hola";

var nombre: string = "Julio";//Variable global
let apellido: string = "Rodríguez";//Variable local
let a: string = "Pepe", b: string = "Paco", c: number = 45;
const PI: number = 3.1415;

console.log("Hola " + "Mundo");
console.log(nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`)
console.log(`Hola ${a}`, "y", `${b}`);

//Declaración de arrays
let alumnos1A: string[] = ["Juan", "Jose", "Alex"];
let alumnos2A: string[] = ["Fran"];
//Forma de propagar arrays
let alumnos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"];
//Array con diferentes datos
let datos: (string | number | boolean)[] = ["Hola", 2, true];
console.log(alumnos);
