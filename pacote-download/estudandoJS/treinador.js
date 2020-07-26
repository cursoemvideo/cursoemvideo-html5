// Verificador de horas
var hora = 19
console.log(`Agora são exatamente ${hora}:00 horas.`)
if(hora < 12){
    console.log(`Dia`)
} else if(hora <= 16){
    console.log(`Tarde`)
} else {
    console.log(`Noite`)
}