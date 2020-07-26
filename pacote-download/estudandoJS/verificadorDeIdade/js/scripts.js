function verificaIdade(){
    var rAno     = new Date()
    var anoAtual = rAno.getFullYear()
    var anoNasc  = document.getElementById('ano')
    var idade    = anoAtual - Number(anoNasc.value)
    var genero   = document.getElementById('sexo').value
    var txtResp  = document.getElementById('res')
    var imgIdade = document.getElementById('imgIdade')

    if(idade < 3){
        textResp.innerHTML(`Você tem apenas ${idade} de idade como você conseguiu realizar esta consulta?`)
        imgIdade.src = ''
    } else if(idade < 7){

    } else if(idade < 11){

    }else if(idade < 15){

    } else if(idade < 19){

    } else if(idade < 31){

    } else if(idade < 51){

    }else if(idade < 71){

    }else if(idade < 101){

    } else if(idade > 100){

    }else{
        console.log(`[ERRO ${idade}] Não conseguimos calcular sua idade atualize a pagina, verifique o preencimento correto do formulário e tente novamente`)
        txtResp.innerHTML = `[ERRO ${idade}] Não conseguimos calcular sua idade atualize a pagina, verifique o preencimento correto do formulário e tente novamente`
    }
}