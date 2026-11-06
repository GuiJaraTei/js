let lista =[]
let sele = document.getElementById('sele')
let res = document.getElementById('res')

function vefi(){
    let n =document.getElementById('txtn')
    if ( n.value <  1 || n.value > 100 || lista.includes(n.value)){
        window.alert('valor invalido ou ja encontrado na lista');
        lista.pop
        n.value=''
        n.focus()
    }else{
    
    lista.push(n.value)
    sele.innerHTML =''
    for( let c of lista){
        let item = document.createElement("option")
        item.text = `valor ${c} adicionado`
        sele.appendChild(item)
        res.innerHTML=''
        n.value=''
        n.focus()
        
    }

}



}

function fina(){
    if(lista.length ==0 ){
        window.alert('adicione numeros para finalizar')
    }else{
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0

        for(var pos in lista){
            soma += Number(lista[pos])
            if (lista[pos] > maior)
                maior = lista[pos] 
            if (lista[pos] < menor)
                menor = lista[pos] 
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo, temos ${tot} numeros cadrastados</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> o menos valor informado foi ${menor}</p>`
        res.innerHTML += `<p> a soma de todos foi ${soma}</p>`
        res.innerHTML += `<p> a media de todos os valores foi ${media}</p>`

    }
}


