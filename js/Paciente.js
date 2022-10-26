export class Paciente{
    constructor(nombre, dni, fechaNac, telefono, obraSocial){
        this.nombre= nombre;
        this.dni= dni;
        this.fechaNac= fechaNac; //YYYY-MM-DD
        this.telefono= telefono;
        this.obraSocial= obraSocial;
    }
    
    // calcularEdad() {
    //     let today = new Date();
    //     let birthDate = new Date(this.fechaNac);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     let m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //       age--;
    //     }
    //     return age;
    // }

}