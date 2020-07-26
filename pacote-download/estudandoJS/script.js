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

