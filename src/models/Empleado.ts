import Persona from "./Persona";

export default class Empleado extends Persona {
    private salario: number;

    constructor(nombre: string, apellidos: string, DNI: string, salario: number, edad?: number) {
        super(nombre, apellidos, DNI, edad);
        this.salario = salario;

    }


    /**
     * Getter $salario
     * @return {number}
     */
    public get $salario(): number {
        return this.salario;
    }

    /**
     * Setter $salario
     * @param {number} value
     */
    public set $salario(value: number) {
        this.salario = value;
    }




}

