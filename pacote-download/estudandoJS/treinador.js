var idade =18
console.log(`Você tem ${idade}`)
if(idade < 16 ){
    console.log('----------- Não vota ---------------')
} else if( idade < 18 || idade >= 70){
        console.log('******* Voto opicional ***********')
    
} else {
    console.log('************* Voto Obrigatório ***********')
}