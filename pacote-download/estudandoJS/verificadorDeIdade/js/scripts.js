function verificaIdade(){
    var rAno     = new Date()
    var anoAtual = rAno.getFullYear()
    var anoNasc  = document.getElementById('ano')
    var idade    = anoAtual - Number(anoNasc.value)
    var genero   = document.querySelector('input[name="genero"]:checked').value
    var txtResp  = document.getElementById('res')
    var imgIdade = document.getElementById('imgIdade')

    if(idade < 3){
        txtResp.innerHTML = `Você tem apenas ${idade} anos de idade como você conseguiu realizar esta consulta? 😳`
        imgIdade.src = `imagens/0_2${genero}.png`
    } else if(idade < 7){
        txtResp.innerHTML = `Você tem ${idade} anos de idade, volte para a barriga de sua mãe, você está crescendo muito rapido, já está fazendoconsultas no computador. 😁`
        imgIdade.src = `imagens/3_6${genero}.png`

    } else if(idade < 11){
        txtResp.innerHTML = `Você tem ${idade}anos de idade, parabéns você já sabe utilizar o computador, mas procure também outras coisas para se divertir. 🥳`
        imgIdade.src = `imagens/7_10${genero}.png`

    }else if(idade < 15){
        txtResp.innerHTML = `Você tem ${idade} anos de idade, que bom te ver por aqui, você cresceu rápido espero que esteja se divertindo bastante. 🤪`
        imgIdade.src = `imagens/11_14${genero}.png`

    } else if(idade < 19){
        txtResp.innerHTML = `Que legal você tem ${idade} anos de idade, aproveite bastante e estudo muito para garantir seu sucesso e alcançar seus objetivos. 😍`
        imgIdade.src = `imagens/15_18${genero}.png`

    } else if(idade < 31){
        txtResp.innerHTML = `você tem ${idade} anos de idade, aproveite bastante sua juventude e espero sinceramente que esteja alcançando os seus objetivos. 🤩`
        imgIdade.src = `imagens/19_30${genero}.png`

    } else if(idade < 51){
        txtResp.innerHTML = `você tem ${idade} anos de idade, você já tem muito conhecimento e experiência a compartilhas com  as pessoas e com certeza elas podem aprender muito com você. 😉`
        imgIdade.src = `imagens/31_50${genero}.png`

    }else if(idade < 71){
        txtResp.innerHTML = `você tem ${idade} anos de idade e caminhar por essa vida não é fácil e você com certeza já passou por grandes dificuldades e venceu todas elas e agora com toda sua experiencia que só lhe deixaram mais forte, agora você passara pelo proximos obstaculos com maior facilidade. Siga sempre em frente que a vitória é certa 🤗`
        imgIdade.src = `imagens/51_70${genero}.png`

    }else if(idade < 101){
        txtResp.innerHTML = `você tem ${idade} anos de idade e nessa vida só temos apenas uma certeza é que vamos viver até o ultimo dia de nossas vidas, devemos ser gratos por cada dia que acordamos e nos levantamos pois é uma benção divina e que você é um dos poucos privilegiados por alcançar essa benção por ${idade} anos 🤗`
        imgIdade.src = `imagens/51_70${genero}.png`

    } else if(idade > 100){
        txtResp.innerHTML = `😲 Que bom te ver por aqui aos ${idade} anos de idade, com certeza você é alguem muito especial  🤗`
        imgIdade.src = `imagens/51_70${genero}.png`

    }else{
        console.log(`[ERRO ${idade}] Não conseguimos calcular sua idade atualize a pagina, verifique o preencimento correto do formulário e tente novamente`)
        txtResp.innerHTML = `[ERRO ${idade}] Não conseguimos calcular sua idade atualize a pagina, verifique o preencimento correto do formulário e tente novamente`
    }
}