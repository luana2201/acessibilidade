var btns = document.querySelectorAll('.listaDeArtigo-slider-item');

//percorrer todos os botoes controladores
btns.forEach(function(btn) {
    btn.addEventListener('click', function(){


        //Remover class 'ativo' dos outros botoes
        btns.forEach(function(btnRemoveClass) {
            btnRemoveClass.classList.remove('listyaDeArtigos-slider-item--ativo')
        })

        this.classList.add('listaDeartigo-slider-item--ativo')
    })
})