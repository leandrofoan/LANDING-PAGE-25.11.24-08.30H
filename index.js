var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})


var elementosAsperger = document.querySelectorAll('.asperger')

elementosAsperger.forEach(function (asperger) {
    asperger.addEventListener('click', function () {
        asperger.classList.toggle('ativa')
    })
})

var elementosJogo = document.querySelectorAll('.jogo')

elementosJogo.forEach(function (jogo) {
    jogo.addEventListener('click', function () {
        jogo.classList.toggle('ativa')
    })
})