

const USUARIO = prompt("Ingresa tu usuario")
const PASSWORD = prompt("Ingresa tu contraseña")

if(USUARIO != "" && PASSWORD != ""){
     alert("Bienvenido " + USUARIO)
}else{
    alert("Usuario o contraseña incorrectos")
}

 const NUMERO_CALIFICACIONES = prompt ("¿Cuantas calificaciones son?")
 let sumatoria = 0 
 let promedio = 0 


 for(let index = 1; index <= NUMERO_CALIFICACIONES; index++){
     const CALIFICACION = prompt("ingrese la calificacion " + index)
     sumatoria = sumatoria + parseFloat (CALIFICACION)

     console.log(sumatoria)
}

 promedio = sumatoria / NUMERO_CALIFICACIONES

 alert("Elpromedio es: " + promedio )

 let precioProducto = 0
 let descuento = 0
 const IVA = 0.21

 const suma = (valorUno, valorDos) => valorUno + valorDos 
 const resta = (valorUno, valorDos) => valorUno - valorDos 
 const calcularIva = subtotal => subtotal * IVA
 const mostrarPrecioFinal = precio => alert(precio)

 const solicitarValores = () => {
    precioProducto = parseFloat(prompt ("ingrese el precio del producto"))
    descuento = parseFloat(prompt("ingrese el descuento en pesos"))
 }

//let NOMBRE = prompt ("Ingresa tu Pokemon favorito (ESC para finalizar)")

//while(NOMBRE != "ESC"){
 //   alert("Tu Pokemon favorito es " + NOMBRE)
 //   NOMBRE = prompt ("Ingresa otro Pokemon más")
//}

//let seleccionUsuario = parseInt(
//    prompt(
//        "Que dia quiere el turno: \n 1. Lunes \n 2.Martes \n 3.Miercoles \n 4.Jueves"
//    )
//);

//if(seleccionUsuario === 1){
//    alert("Ha seleccionado el día Lunes")
//}else if (seleccionUsuario ===2){
//    alert("Ha seleccionado el día Martes")
//}else if (seleccionUsuario ===3){
//    alert("Ha seleccionado el día Miercoles")
//}else if (seleccionUsuario ===4){
//    alert("Ha seleccionado el día Jueves")
//}else{
//    alert("No eligio nada")
//}

//function sumar( primerNumero, segundoNumero){
//    const SUMATORIA = primerNumero + segundoNumero
//    return SUMATORIA
//}

//function mostrarPromedio(){
    //const RESULTADO_SUMATORIA = sumar(8,10)
    //const PROMEDIO = RESULTADO_SUMATORIA / 2

  //  alert("El promedio es: " + PROMEDIO) 
//}


