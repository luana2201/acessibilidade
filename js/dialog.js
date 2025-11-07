//Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
   dialog.classList.add('dialogNewsletter--aberto');
});

function fechandoDialog () {
    document.activeElement.getBoundingClientRect();
    dialog.classList.add('dialogNewsletter--aberto');
}

//listeners


document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);