let libros = ["Cien años de soledad", "Orgullo y prejuicio", "Malcriada", "Crimen y castigo", "El señor de los anillos"];
function agregarLibros(soledad) {
    libros.push(soledad);
}
console.log(libros);
agregarLibros("soledad");
console.log(libros);
function eliminarLibros() {
    libros.pop("soledad");
}
eliminarLibros();
console.log (libros);
function mostrarLibroEnPosicion (Posicion){
    let mostrar= libros[Posicion] ? libros[Posicion] : "la posicion no es valida.";
    console.log(mostrar);
}
mostrarLibroEnPosicion(2);
mostrarLibroEnPosicion(8);