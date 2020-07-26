// Trabalhando com condições multiplas (switch - case)
// Para a criação de um swith é obrigatorio a criação de um break em cada expressão case

var agora  = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log(`Hoje é domingo`)
        break

    case 1:
        console.log(`Hoje é Segunda-Feira`)
        break

    case 2:
        console.log(`Hoje é Terça-Feira`)
        break

    case 3:
        console.log(`Hoje é Quarta-Feira`)
        break

    case 4:
        console.log(`Hoje é Quinta-Feira`)
        break

    case 5:
        console.log(`Hoje é Sexta-Feira`)
        break

    case 6:
        console.log(`Hoje é Sabádo`)
        break

    default:
        console.log(`[ERRO] Dia da semana desconhecido`)
        break

}