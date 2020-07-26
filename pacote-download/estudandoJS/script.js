function calcular(){
var txtV = document.querySelector("input#txtVel")
var resD = document.getElementById("res")
var vel  = Number(txtV.value)
res.innerHTML = `Sua velocidade é de <strong> ${vel}Km/h. </strong> `
if(vel > 60){
    res.innerHTML += `<br> *** Você Foi <strong>MULTADO</strong> por excesso de velocidade *** <br>`
}
res.innerHTML +=`Dirigja sempre com cinto de <em>segurança</em>`
}

function identificaNacionalidade(){
    var txtNasc   = document.querySelector('input#pais').value
    var resCampo = document.getElementById('res')
    console.log(`Seu pais é ${txtNasc}`)
    resCampo.innerHTML = 'Estamos verificando sua nacionalidade....'
    if(txtNasc == 'Brasil'){
        resCampo.innerHTML += `<br>Seu pais de origem é o ${txtNasc} e você é <strong>Brasileiro!</strong><br>`
    } else {
        resCampo.innerHTML += `<br>Seu pais de origem é ${txtNasc} e você é <strong>Estrangeiro</strong><br>`
    }

    console.log(`Muito Obrigado por utilizar o`)
    console.log(`**************** verificador de nacionalidade ***************`)
    resCampo += `****************Muito Obrigado por utilizar o verificador de nacionalidade***************`
}