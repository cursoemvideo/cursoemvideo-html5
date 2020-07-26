//Parte interativa do Relogio Animado
function hora(){
var hRelogio = new Date()
var idHora   = hRelogio.getHours()
var idMinuto = hRelogio.getMinutes()
var txtHora  = document.getElementById('textoHora')
var imgHora  = document.querySelector("img#imgHora")
var bgHora   = document.querySelector("div.interface")

if(idHora < 6){
    console.log(`Boa madrugada agora são exatamente: ${idHora}:${idMinuto}h`)
    //boa madrugada
    txtHora.innerHTML = `Boa madrugada agora são exatamente: ${idHora}:${idMinuto}h`
    imgHora.src = "imagens/compactadas/madrugada-min.png"
    bgHora.style.background = "#00061c"
} else if(idHora < 12){
    console.log(`Bom dia agora são exatamente: ${idHora}:${idMinuto}`)
    //bom dia
    txtHora.innerHTML = `Bom dia agora são exatamente: ${idHora}:${idMinuto}h`
    imgHora.src = "imagens/compactadas/dia-min.png"
    bgHora.style.background = "rgb(218, 238, 242)"
} else if(idHora < 16){
    console.log(`Boa tarde agora são exatamente: ${idHora}:${idMinuto}`)
    //boa tarde
    txtHora.innerHTML = `Boa tarde agora são exatamente: ${idHora}:${idMinuto}h`
    imgHora.src = "imagens/compactadas/tarde-min.png"
    bgHora.style.background = "rgb(192, 82, 10)"
} else if(idHora < 24){
    console.log(`Boa noite agora são exatamente: ${idHora}:${idMinuto}`)
    //Boa noite
    txtHora.innerHTML = `Boa noite agora são exatamente: ${idHora}:${idMinuto}h`
    imgHora.src = "imagens/compactadas/noite_-min.png"
    bgHora.style.background = "rgb(11, 53, 61)"
} else{
    txtHora.innerHTML = `[ERRO: ${idHora}] Desculpe, não conseguimos identificar a hora correta :(`
    console.log(`[ERRO: ${idHora}] Hora desconhecida`)
}

}