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
    console.log("Se ha producido un error al convertir un numero a String", error);
}

//Bucles

let listadeTareas: Tarea[] = [

    {
        nombre: "Tarea 1",
        prioridad: 2,
        estado: estadoTarea["En proceso"]
    },
    {
        nombre: "Tarea 2",
        prioridad: 0,
        estado: estadoTarea.Pendiente
    },
    {
        nombre: "Tarea 3",
        prioridad: 15,
        estado: estadoTarea.Terminado
    }
]

//Bucle for each
listadeTareas.forEach((tarea: Tarea, index: number) => console.log(`${index}- ${tarea.nombre}`));

//Bucle for 
for (let index = 0; index < listadeTareas.length; index++) {
    const tarea = listadeTareas[index];
    console.log(tarea);

}

//Bucle while
while (tarea1.estado !== estadoTarea.Terminado) {
    if (tarea1.prioridad == 20) {
        estadoTarea.Terminado;
        break;
    } else {
        tarea1.prioridad++;
    }
}

//Bucle do-while
do {
    tarea1.prioridad++;
    tarea1.estado = estadoTarea.Terminado;
} while (tarea1.estado != estadoTarea.Terminado);

//Funciones

/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Julio";
    console.log("Hola Mundo", `${nombre}`);

}

//Llamada de la función saludar
saludar();

//Función clásica con parámetros
/**
 * Función que saluda a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludar2(nombre: string) {
    console.log("Hola Mundo", `${nombre}`);
}

saludar2(nombre);

//Función con parámetros por defecto

/**
 * Función que saluda a una person
 * @param nombre Nombre de la persona a saludar que es por defecto Pepe
 */

function saludarPorDefecto(nombre: string = "Pepe") {
    console.log("Hola Mundo", `${nombre}`);
}

saludarPorDefecto();

//Función con parámetros opcionales 
/**
 * Función que saluda a alguien si se le pasa por parámetro el nombre y sino saluda a anónimo
 * @param nombre Nombre de la persona a saludar
 */
function saludarOPCIONAL(nombre?: string) {
    if (nombre) {
        console.log("Hola Mundo: " + nombre);
    } else {
        console.log("Hola anónimo");
    }
}

saludarOPCIONAL();
saludarOPCIONAL(nombre);

//Función con parámetros de varios tipos
function funcionVariosParametros(nombre: string, edad: number) {
    console.log(`${nombre},${edad}`);
}

let edad: number = 25;
funcionVariosParametros(nombre, edad);

//Función con un parámetro que puede ser de varios tipos
function parametroDistintoTipo(a: string | number) {
    if (typeof (a) == 'string') {
        console.log("La variable a es un string")
    } else {
        console.log("La variable a es un número")
    }
}

parametroDistintoTipo(nombre);
parametroDistintoTipo(edad);

//Funciones con return
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

console.log(ejemploReturn("Pepe", "Viyuela"));

//Función que puede recibir un número indeterminado de argumentos
function multipleParams(...nombres: string[]) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}

multipleParams("Pepe", "Paco", "Pedro");

//Función anónima
let fanonima = function () { console.log("Hola Mundo") };

fanonima();

//A este tipo de funciones también se le puede pasar una lista
let listaNombres: string[] = ["Juan", "Jose"];

multipleParams(...listaNombres);

//Funciones arrow
/**
 * Las funciones arrow son una sintaxis compacta de definir funciones en JavaScript y TypeScript.
 * Proporcionan una forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional, 
 * lo que mejora la legibilidad y mantiene la seguridad de los tipos.
 * 
 * (param1, param2, ..., paramN) => {}
 */

let getDatosTarea = (tarea: Tarea): string => { return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} ` }
console.log(getDatosTarea(tarea1));

let farrow = (tarea: Tarea, indice: number) => { console.log(`${indice}-${tarea.nombre}`) };
//Le pasamos al forEach una función arrow ya definida
console.log("For each con función arrow ya definida")
listadeTareas.forEach(farrow);
//Le pasamos al forEach una función arrow directamente
console.log("For each con función arrow definida dentro del forEach")
listadeTareas.forEach((tarea: Tarea, indice: number) => { console.log(`${indice}-${tarea.nombre}`) });
//Le pasamos al forEach una función anónima
console.log("For each con función anónima dentro del forEach")
listadeTareas.forEach(function (tarea: Tarea) { console.log(`${tarea.nombre}`) });

/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */

//Ejemplo 1: 

const funcionMuestra = function () {
    console.log("CallBack desde función estándar");
}

setTimeout(funcionMuestra, 100); // La función timeout llama a funciónMuestra después de 100ms

// Ejemplo 2: paso de una función anónima
setTimeout(function () { console.log("CallBack desde función anónima") }, 1000);

// Ejemplo 3: paso de una función flecha

setTimeout(() => { console.log("CallBack desde función flecha") }, 500);

/* // Ejemplo 4:

let muestraDatos = function (a:string, b:number, c:string[]){
    console.log(`Ejemplo 4 - ${a}`);
}

listadeTareas.forEach(muestraDatos)

listadeTareas.forEach((valor:string,indice:number,datos:string[]) => {
    console.log(`${valor}, mostrado desde función CallBack fecha`)
}) */

// Ejemplo 5: 

let fsuma = function suma(a: number, b: number) {
    console.log("Llamada desde función opera")
    return a + b;
}

let fresta = function resta(a: number, b: number) {
    return a - b;
}
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado

function opera(x: number, y: number, callbackfuntion: (a: number, b: number) => number) {
    return callbackfuntion(x, y);
}

opera(2, 3, fsuma);
opera(2, 3, fresta);

//Funciones asincronas

async function asincrona() {
    let suma: number = 0;
    for (let index = 0; index < 100000; index++) {
        suma += index;

    }
    return suma
}
asincrona().then((data: number) => { console.log(`El resultado de ejecutar asyc = ${data}`) });
console.log("Línea de código posterior a la función asincrona");

//  Funcion asincrona con promesa

type University = {
    domains: string[];
    alpha_two_codes: string;
    name: string;
}
async function getDataUniversity(): Promise<University[]> {
    const data = await fetch("http://universities.hipolabs.com/search?country=Spain");
    let respuesta: Promise<University[]> = await data.json() as Promise<University[]>;
    return respuesta;

}

getDataUniversity().then((data: University[]) => {
    data.forEach((universidad) => console.log(universidad.name))
});

//funciones generadoras
function* fgeneradora(): Generator<Tarea> {
    for (let tarea in listadeTareas) {
        yield listadeTareas[tarea];
    }
}

let funciongen = fgeneradora;

//ASYNC GENERADORA
function* fgeneradora2(): Generator<string> {
    yield "Hola"
    yield "Mundo"
    yield "IES"
}

let llamadafgen2 = fgeneradora2();
let str = llamadafgen2.next(); //{value:"Hola",done:false}

type webPage = {
    Name: string,
    Domain: string,
    Description: string
}

async function* obtenerDatosWeb(): AsyncGenerator<webPage> {
    let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    let datos: webPage[] = await peticion.json() as webPage[];

    for (let index = 0; index < datos.length; index++) {
        yield datos[index];
    }
}

let datosWebPage = obtenerDatosWeb();

datosWebPage.next().then(({ value, done }) => { console.log(value.Name, "-", value.Description) })

//Sobrecarga de funciones
function saludarSobrecarga(nombre: string): string;
function saludarSobrecarga(nombre: string, apellido: string): string;
function saludarSobrecarga(nombre: string, apellido: string, edad: string): string;

function saludarSobrecarga(nombre: string, apellido?: string, edad?: string) {

    let saludo = `Hola ${nombre}`

    if (apellido != undefined) {
        saludo = saludo + `${apellido}`;
    }

    if (edad != undefined) {
        saludo = saludo + `${edad}`;
    }
    return saludo;
}



//Activity 1.1. Data Storage.

//Activity 2
function funcion(type: string = "Session Storage", key: string, data: Tarea[]) {

    if (type == "session") {
        sessionStorage.setItem(key, data.toString());
        console.log("Se guardaron los datos en Session Storage");
    } else if (type == "local") {
        localStorage.setItem(key, data.toString());
        console.log("Se guardaron los datos en Local Storage")
    }

}
