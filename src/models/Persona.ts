/**Clase Persona
 * 
 * Constructor
 * 
 * 
 * - Getter y setter
 */

export class Persona {
    private nombre: string;
    private apellidos: string;
    private DNI: string;


    constructor(nombre: string, apellidos: string, DNI: string, edad?: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.DNI = DNI;
        if (edad == undefined) {
            this.edad = 0;
        } else {
            this.edad = edad;
        }

    }

    /**
     * Getter $nombre
     * @return {string}
     */
    public get $nombre(): string {
        return this.nombre;
    }

    /**
     * Getter $apellidos
     * @return {string}
     */
    public get $apellidos(): string {
        return this.apellidos;
    }

    /**
     * Getter $DNI
     * @return {string}
     */
    public get $DNI(): string {
        return this.DNI;
    }

    /**
     * Setter $nombre
     * @param {string} value
     */
    public set $nombre(value: string) {
        this.nombre = value;
    }

    /**
     * Setter $apellidos
     * @param {string} value
     */
    public set $apellidos(value: string) {
        this.apellidos = value;
    }

    /**
     * Setter $DNI
     * @param {string} value
     */
    public set $DNI(value: string) {
        this.DNI = value;
    }
    private edad?: number;

}

let persona1 = new Persona("Julio", "Rodríguez", "00000000T");
