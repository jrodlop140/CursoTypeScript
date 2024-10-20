/**
 * Caso práctico 1.2 perro
 */

import { start } from "repl";



//  Declaramos el tipo Perro
type Perro = {
    message: string,
    status: string
}

// Declaramos la funcion async

/*Funcion asincrona que se conecta a una API para traese una imagen de perro aleatoria*/
async function getDataDog(): Promise<Perro> {
    let petition = await fetch(" https://dog.ceo/api/breeds/image/random");
    let datos = await petition.json() as Promise<Perro>;
    return datos;
}

/*Llamamos a la funcion asincrona para poder obtener los datos de un perro y convertilos en una imagen posteriormente*/
let funcionAsincrona = getDataDog();
funcionAsincrona.then((perro: Perro) => {
    console.log(perro.message)

    //Creamos elemento imagen
    let imgPerro = document.createElement("img") as HTMLImageElement;
    //Asociamos la url de la imagen con el mensaje de perro
    imgPerro.src = perro.message;

    //Implementamos un nuevo evento para que salaga una nueva imagen al pulsar sobre una
    imgPerro.addEventListener("click", async () => {
        //Se crea una nueva isntancia de perro que se agrega a message
        let nuevoPerro = await getDataDog();
        imgPerro.src = nuevoPerro.message;

    });

    //Añadmos la imagen en el body en la posicion cero
    let body = document.getElementsByTagName("body")[0] as HTMLBodyElement
    body.append(imgPerro);
}
)

/*Comenzaremos con la funcionalidad de los botones con respecto a la lista*/

let listaOl = document.getElementById("lista-contenidos") as HTMLOListElement;
let btnAdd = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
let btnRemove = document.getElementById("btn-remove-content") as HTMLButtonElement;
let input = document.getElementById("input-contenido") as HTMLInputElement;
let body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
let divErrores = document.getElementById("errores") as HTMLDivElement;
let starList = document.getElementsByName("star-li") as NodeListOf<HTMLElement>;

//Creamos el boton de añadir elementos, en el caso de que este vacio le informamos del error

btnAdd.addEventListener("click", (ev: Event) => {
    if (input.value != "") {
        //Creamos la estrella
        let star = document.createElement("i");
        star.classList.add("bi");
        star.classList.add("bi-star");
        star.setAttribute("name", "star-li");

        //Creamos la lista y el valor del input
        let list = document.createElement("li");
        let valorInput = document.createTextNode(input.value);

        //Añadimos a la lista la estrella e input
        list.append(star);
        list.append(valorInput);

        //Añadimos al ol la li
        listaOl.append(list);
    } else {
        let mensajeError = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeError.textContent = "No ha introducido nada, debe introducir texto";
        mensajeError.style.color = "red";
        divErrores.append(mensajeError);

    }
});

//Realizamos la funcionalidad para el boton remove que borra el ultimo elemnto de la lista en el caso de que sea distinto de null

btnRemove.addEventListener("click", (ev: Event) => {
    if (listaOl.lastElementChild != null) {
        listaOl.lastElementChild.remove();
    } else {
        let mensajeError = document.getElementById("p-errores") as HTMLParagraphElement;
        mensajeError.textContent = "No ha introducido nada, debe introducir texto";
        mensajeError.style.color = "red";
        divErrores.append(mensajeError);
    }
})

//Realizamos la funcionalidad de que cuando pasemos el raton sobre las estrellas se iluminen y cuando salga se quite la iluminacion.
starList.forEach(value => {
    value.addEventListener("mouseover", (ev: Event) => {
        value.classList.remove("bi-star");
        value.classList.add("bi-star-fill");
    }
    )

    value.addEventListener("mouseout", (ev: Event) => {
        if (!value.classList.contains("clicked")) {
            value.classList.remove("bi-star-fill");
            value.classList.add("bi-star");
        }
    }
    )

    value.addEventListener("click", (ev: Event) => {
        if (value.classList.contains("clicked")) {
            value.classList.remove("clicked");
            value.classList.remove("bi-star-fill")
            value.classList.add("bi-star")
        } else {
            value.classList.add("clicked");
            value.classList.remove("bi-star");
            value.classList.add("bi-star-fill");
        }
    }
    )
});











