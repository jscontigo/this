console.log(this);
this.dia = "Domingo";
this.fecha = "11.08.2019";
this.nombre = "Tejas Rodriquez";

const x = {
    nombre: "Alguien",
    contrasena: "Sabado",
    decir: function(){
        console.log(`${this.nombre} tiene una contrasena de ${this.contrasena}`)
    }
}
const y = {
    nombre: "Che",
    contrasena: "hamburguesa"
}
const z = {
    nombre: "Hamburglar",
    contrasena: "McDonaldLand"
}

x.decir();
x.decir.call(y);
x.decir.apply(z);