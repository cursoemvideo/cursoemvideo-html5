// Verificador de horas
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas.`)
if(hora < 6){
    console.log(`Boa Madrugada :)`)
} else if(hora < 12){
    console.log(`Bom Dia :|`)
} else if(hora <= 16){
    console.log(`Boa Tarde ;)`)
} else {
    console.log(`Boa Noite (^_^)`)
}