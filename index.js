

const USUARIO = prompt("Ingresa tu usuario")
const PASSWORD = prompt("Ingresa tu contraseña")

if(USUARIO == "admin" && PASSWORD == "1234"){
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




