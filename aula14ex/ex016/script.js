function contador() {
    let ini = document.getElementById('i')
    let fim = document.getElementById('f')
    let pas = document.getElementById('p')
    var res = document.getElementById('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert("[ERRO] falta dados")
    } else {
        res.innerHTML += 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
         let p =Number(pas.value)

    if (p <= 0 ){
        window.alert('passo invalido, use pelo menos passa 1')
        p =1
    }
         
    if(i < f){
        for(var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1f449} `
        }
        
    }else{
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1f449} `
        }
        
    }
    res.innerHTML += 'FIM'
    }
}
