
document.addEventListener('DOMContentLoaded', function() {

    var titulos = ['Y porque entraste aca?', 'Dale che', 'Como estas?', 'mandame un dm ahi, no me enojo', 'Que bendicion ve', 'Como va ese liceo?', 'dale hermano, ya te dije no se puede ser tan chusma', 'vamo y vamo', 'Si la hice yo esta mierda', 'casi 8 años estudiando ingles y todavia no se como hablarte']


    rtitles = titulos[Math.floor(Math.random() * titulos.length)]

    document.getElementById('title').innerHTML = rtitles
    

    
})
