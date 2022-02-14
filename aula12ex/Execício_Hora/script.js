
function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${minutos}`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#FFC8A6'
    } else if (hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#F2C335'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#0C1726'
    }

}