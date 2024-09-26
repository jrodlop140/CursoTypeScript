import { log } from "console";

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
let alumnos: string[] = [...alumnos1A, ...alumnos2A, "Pablo"];
//Array con diferentes datos
let datos: (string | number | boolean)[] = ["Hola", 2, true];
console.log(alumnos);

//Como se declaran objetos en TypeScript
let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
}

let configuracion = {
    versionTS: "ES6",
    versioncodigo: "1.0",
    ...misDatos
}

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versioncodigo;

console.log(`${propiedad1}`, `${propiedad2}`);

//Declaración de enumeraciones
//Le damos un valor a las claves para que salgan los valores por consola sino salen números
enum estadoTarea { "Pendiente" = "P", "En proceso" = "E", "Terminado" = "T" };

let estadoPendiente = estadoTarea["Pendiente"];

console.log(estadoPendiente);

//Declaración de interfaces
interface Tarea {
    nombre: string;
    prioridad: number;
    estado: estadoTarea;
}

let tarea1: Tarea = { nombre: "tarea1", prioridad: 2, estado: estadoTarea["En proceso"] };

//Declaración de tipos 
type Empleado = {
    nombre: String,
    edad: number,
    sueldo: number
}

type Jefe = {
    codigoIdentificativo: string
}

//Variable con dos tipos
let empleado2: Empleado & Jefe;

empleado2 = { nombre: "Paco", edad: 38, sueldo: 3600, codigoIdentificativo: "2345" };
let empleado1: Empleado = { nombre: "Pepe", edad: 28, sueldo: 1300 };


console.log(empleado1.nombre);
console.log(empleado2.codigoIdentificativo);

//Operador Ternario
//condicion ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecución` : `La tarea ${tarea1.nombre} no se encuentra en ejecución`)

//IF-ELSE
if (tarea1.estado == "E") {
    //Codigo C1
} else if (tarea1.estado == "P") {
    //Codigo C2
} else {
    //Codigo C3
}

//SWITCH
switch (tarea1.estado) {
    case "E":
        console.log("Tarea en proceso");
        break;
    default:
        console.log("No tiene estado")
        break;
}

//Try-Catch
try {
    let numero1: number = 1;
    console.log(numero1.toString());
} catch (error) {
    console.log("Se ha producido un error al convertir un numero a String",error);
}