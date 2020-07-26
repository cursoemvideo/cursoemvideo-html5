// Verificador de horas
var hora = 19
console.log(`Agora são exatamente ${hora}:00 horas.`)
if(hora < 6){
    console.log(`Boa Madrugada :)`)
} else if(hora < 12){
    console.log(`Bom Dia :|`)
} else if(hora <= 16){
    console.log(`Boa Tarde ;)`)
} else {
    console.log(`Boa Noite (^_^)`)
}