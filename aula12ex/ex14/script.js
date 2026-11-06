function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#f9d487'
    }else if (hora >=12 && hora <18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#e5d1c1'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#191970'
    }
}