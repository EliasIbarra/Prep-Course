function getEdad(){
    return this.edad * 2
}
var persona  ={

    edad:   33,
    getEdad: getEdad
}
console.log(persona.getEdad())
