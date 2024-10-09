/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/js-cookie/dist/js.cookie.js":
/*!**************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.js ***!
  \**************************************************/
/***/ (function(module) {

/*! js-cookie v3.0.5 | MIT */
;
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /* eslint-disable no-var */
  function assign (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function (value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init (converter, defaultAttributes) {
    function set (name, value, attributes) {
      if (typeof document === 'undefined') {
        return
      }

      attributes = assign({}, defaultAttributes, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }

      name = encodeURIComponent(name)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);

      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue
        }

        stringifiedAttributes += '; ' + attributeName;

        if (attributes[attributeName] === true) {
          continue
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie =
        name + '=' + converter.write(value, name) + stringifiedAttributes)
    }

    function get (name) {
      if (typeof document === 'undefined' || (arguments.length && !name)) {
        return
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');

        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);

          if (name === found) {
            break
          }
        } catch (e) {}
      }

      return name ? jar[name] : jar
    }

    return Object.create(
      {
        set,
        get,
        remove: function (name, attributes) {
          set(
            name,
            '',
            assign({}, attributes, {
              expires: -1
            })
          );
        },
        withAttributes: function (attributes) {
          return init(this.converter, assign({}, this.attributes, attributes))
        },
        withConverter: function (converter) {
          return init(assign({}, this.converter, converter), this.attributes)
        }
      },
      {
        attributes: { value: Object.freeze(defaultAttributes) },
        converter: { value: Object.freeze(converter) }
      }
    )
  }

  var api = init(defaultConverter, { path: '/' });
  /* eslint-enable no-var */

  return api;

}));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const js_cookie_1 = __importDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.js"));
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
var var1 = true;
var var2 = "Hola";
var nombre = "Julio"; //Variable global
let apellido = "Rodríguez"; //Variable local
let a = "Pepe", b = "Paco", c = 45;
const PI = 3.1415;
console.log("Hola " + "Mundo");
console.log(nombre + " " + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`);
console.log(`Hola ${a}`, "y", `${b}`);
//Declaración de arrays
let alumnos1A = ["Juan", "Jose", "Alex"];
let alumnos2A = ["Fran"];
//Forma de propagar arrays
let alumnos = [...alumnos1A, ...alumnos2A, "Pablo"];
//Array con diferentes datos
let datos = ["Hola", 2, true];
console.log(alumnos);
//Como se declaran objetos en TypeScript
let misDatos = {
    nombre: "Jose",
    apellidos: "Rodriguez",
    edad: 18
};
let configuracion = Object.assign({ versionTS: "ES6", versioncodigo: "1.0" }, misDatos);
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versioncodigo;
console.log(`${propiedad1}`, `${propiedad2}`);
//Declaración de enumeraciones
//Le damos un valor a las claves para que salgan los valores por consola sino salen números
var estadoTarea;
(function (estadoTarea) {
    estadoTarea["Pendiente"] = "P";
    estadoTarea["En proceso"] = "E";
    estadoTarea["Terminado"] = "T";
})(estadoTarea || (estadoTarea = {}));
;
let estadoPendiente = estadoTarea["Pendiente"];
console.log(estadoPendiente);
let tarea1 = { nombre: "tarea1", prioridad: 2, estado: estadoTarea["En proceso"] };
//Variable con dos tipos
let empleado2;
empleado2 = { nombre: "Paco", edad: 38, sueldo: 3600, codigoIdentificativo: "2345" };
let empleado1 = { nombre: "Pepe", edad: 28, sueldo: 1300 };
console.log(empleado1.nombre);
console.log(empleado2.codigoIdentificativo);
//Operador Ternario
//condicion ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecución` : `La tarea ${tarea1.nombre} no se encuentra en ejecución`);
//IF-ELSE
if (tarea1.estado == "E") {
    //Codigo C1
}
else if (tarea1.estado == "P") {
    //Codigo C2
}
else {
    //Codigo C3
}
//SWITCH
switch (tarea1.estado) {
    case "E":
        console.log("Tarea en proceso");
        break;
    default:
        console.log("No tiene estado");
        break;
}
//Try-Catch
try {
    let numero1 = 1;
    console.log(numero1.toString());
}
catch (error) {
    console.log("Se ha producido un error al convertir un numero a String", error);
}
//Bucles
let listadeTareas = [
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
];
//Bucle for each
listadeTareas.forEach((tarea, index) => console.log(`${index}- ${tarea.nombre}`));
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
    }
    else {
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
function saludar2(nombre) {
    console.log("Hola Mundo", `${nombre}`);
}
saludar2(nombre);
//Función con parámetros por defecto
/**
 * Función que saluda a una person
 * @param nombre Nombre de la persona a saludar que es por defecto Pepe
 */
function saludarPorDefecto(nombre = "Pepe") {
    console.log("Hola Mundo", `${nombre}`);
}
saludarPorDefecto();
//Función con parámetros opcionales 
/**
 * Función que saluda a alguien si se le pasa por parámetro el nombre y sino saluda a anónimo
 * @param nombre Nombre de la persona a saludar
 */
function saludarOPCIONAL(nombre) {
    if (nombre) {
        console.log("Hola Mundo: " + nombre);
    }
    else {
        console.log("Hola anónimo");
    }
}
saludarOPCIONAL();
saludarOPCIONAL(nombre);
//Función con parámetros de varios tipos
function funcionVariosParametros(nombre, edad) {
    console.log(`${nombre},${edad}`);
}
let edad = 25;
funcionVariosParametros(nombre, edad);
//Función con un parámetro que puede ser de varios tipos
function parametroDistintoTipo(a) {
    if (typeof (a) == 'string') {
        console.log("La variable a es un string");
    }
    else {
        console.log("La variable a es un número");
    }
}
parametroDistintoTipo(nombre);
parametroDistintoTipo(edad);
//Funciones con return
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
console.log(ejemploReturn("Pepe", "Viyuela"));
//Función que puede recibir un número indeterminado de argumentos
function multipleParams(...nombres) {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}
multipleParams("Pepe", "Paco", "Pedro");
//Función anónima
let fanonima = function () { console.log("Hola Mundo"); };
fanonima();
//A este tipo de funciones también se le puede pasar una lista
let listaNombres = ["Juan", "Jose"];
multipleParams(...listaNombres);
//Funciones arrow
/**
 * Las funciones arrow son una sintaxis compacta de definir funciones en JavaScript y TypeScript.
 * Proporcionan una forma más breve y clara de escribir funciones en comparación con la sintaxis tradicional,
 * lo que mejora la legibilidad y mantiene la seguridad de los tipos.
 *
 * (param1, param2, ..., paramN) => {}
 */
let getDatosTarea = (tarea) => { return `La tarea denominada ${tarea.nombre} cuyo estado es ${tarea.estado} tiene una prioridad ${tarea.prioridad} `; };
console.log(getDatosTarea(tarea1));
let farrow = (tarea, indice) => { console.log(`${indice}-${tarea.nombre}`); };
//Le pasamos al forEach una función arrow ya definida
console.log("For each con función arrow ya definida");
listadeTareas.forEach(farrow);
//Le pasamos al forEach una función arrow directamente
console.log("For each con función arrow definida dentro del forEach");
listadeTareas.forEach((tarea, indice) => { console.log(`${indice}-${tarea.nombre}`); });
//Le pasamos al forEach una función anónima
console.log("For each con función anónima dentro del forEach");
listadeTareas.forEach(function (tarea) { console.log(`${tarea.nombre}`); });
/**
 * Funciones CallBack
 * Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.
 * Hay que tener en cuenta que una función se trata como un objeto.
 */
//Ejemplo 1: 
const funcionMuestra = function () {
    console.log("CallBack desde función estándar");
};
setTimeout(funcionMuestra, 100); // La función timeout llama a funciónMuestra después de 100ms
// Ejemplo 2: paso de una función anónima
setTimeout(function () { console.log("CallBack desde función anónima"); }, 1000);
// Ejemplo 3: paso de una función flecha
setTimeout(() => { console.log("CallBack desde función flecha"); }, 500);
/* // Ejemplo 4:

let muestraDatos = function (a:string, b:number, c:string[]){
    console.log(`Ejemplo 4 - ${a}`);
}

listadeTareas.forEach(muestraDatos)

listadeTareas.forEach((valor:string,indice:number,datos:string[]) => {
    console.log(`${valor}, mostrado desde función CallBack fecha`)
}) */
// Ejemplo 5: 
let fsuma = function suma(a, b) {
    console.log("Llamada desde función opera");
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
// En este ejemplo estamos definiendo que la función opera espera recibir como parámetro una función CallBack
// Concretamente, estamos diciendo que la función como entrada tiene que tener dos parámetros y devolver un número
// Cuando se llama a dicha función CallBack desde la función principal se le pasan dichos parámetros y se vuelve a operar con el resultado
function opera(x, y, callbackfuntion) {
    return callbackfuntion(x, y);
}
opera(2, 3, fsuma);
opera(2, 3, fresta);
//Funciones asincronas
function asincrona() {
    return __awaiter(this, void 0, void 0, function* () {
        let suma = 0;
        for (let index = 0; index < 100000; index++) {
            suma += index;
        }
        return suma;
    });
}
asincrona().then((data) => { console.log(`El resultado de ejecutar asyc = ${data}`); });
console.log("Línea de código posterior a la función asincrona");
//  Funcion asincrona con promesa
// type University = {
//     domains: string[];
//     alpha_two_codes: string;
//     name: string;
// }
// async function getDataUniversity(): Promise<University[]> {
//     const data = await fetch("http://universities.hipolabs.com/search?country=Spain");
//     let respuesta: Promise<University[]> = await data.json() as Promise<University[]>;
//     return respuesta;
// }
// getDataUniversity().then((data: University[]) => {
//     data.forEach((universidad) => console.log(universidad.name))
// });
//funciones generadoras
function* fgeneradora() {
    for (let tarea in listadeTareas) {
        yield listadeTareas[tarea];
    }
}
let funciongen = fgeneradora;
//ASYNC GENERADORA
function* fgeneradora2() {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}
let llamadafgen2 = fgeneradora2();
let str = llamadafgen2.next(); //{value:"Hola",done:false}
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let index = 0; index < datos.length; index++) {
            yield yield __await(datos[index]);
        }
    });
}
let datosWebPage = obtenerDatosWeb();
datosWebPage.next().then(({ value, done }) => { console.log(value.Name, "-", value.Description); });
function saludarSobrecarga(nombre, apellido, edad) {
    let saludo = `Hola ${nombre}`;
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
/**
 * Método que dependiendo del tipo pasado guarda los datos por parámetro en Session Storage o Local Storage
 *
 * @param type Tipo de dato
 * @param key Clave
 * @param data Array de tareas
 */
function activity2(type = "Session Storage", key, data) {
    if (type == "session") {
        sessionStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Session Storage");
    }
    else if (type == "local") {
        localStorage.setItem(key, JSON.stringify(data));
        console.log("Se guardaron los datos en Local Storage");
    }
}
//Activity 3
activity2("session", "datos", listadeTareas);
activity2("local", "datos", listadeTareas);
//Activity 4
/**
 * Método que recupera los datos de Session Storage o de Local Storage
 *
 * @param type
 * @param key
 */
function recuperarDatos(type = "session", key) {
    let dato = null;
    if (type == "session") {
        dato = sessionStorage.getItem(key);
        console.log("Se recuperaron los datos en Session Storage");
    }
    else if (type == "local") {
        dato = localStorage.getItem(key);
        console.log("Se recuperaron los datos en Local Storage");
    }
    else {
        console.error("No se ha introducido un tipo válido");
    }
    return dato;
}
//Activity 5
// Recuperar datos de Session Storage y Local Storage
let datosRecuperadosSession = recuperarDatos("session", "datos");
let datosRecuperadosLocal = recuperarDatos("local", "datos");
// Procesar los datos recuperados de Session Storage
if (datosRecuperadosSession) {
    try {
        let auxiliarSession = JSON.parse(datosRecuperadosSession);
        console.log("Datos de Session Storage:", auxiliarSession);
    }
    catch (error) {
        console.error("Error al parsear datos de Session Storage:", error);
    }
}
else {
    console.log("No se encontraron datos en Session Storage");
}
// Procesar los datos recuperados de Local Storage
if (datosRecuperadosLocal) {
    try {
        let auxiliarLocal = JSON.parse(datosRecuperadosLocal);
        console.log("Datos de Local Storage:", auxiliarLocal);
    }
    catch (error) {
        console.error("Error al parsear datos de Local Storage:", error);
    }
}
else {
    console.log("No se encontraron datos en Local Storage");
}
//Activity 6
/**
 * Método que borra los datos de Session Storage y Local Storage
 *
 * @param type Valor que pasamos para controlar que borramos
 * @param key Clave para borrar los storages
 */
function borrarDatos(type, key) {
    if (type == "session") {
        sessionStorage.removeItem(key);
    }
    else if (type == "local") {
        localStorage.removeItem(key);
    }
}
borrarDatos("session", "datos");
borrarDatos("local", "datos");
//Activity 7
js_cookie_1.default.set("nombre", "julio,{expires:7,path:/}");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map