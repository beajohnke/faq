const iconeMais = document.querySelectorAll('.duvida');

iconeMais.forEach((item) => {
    item.addEventListener('click', () => {
        const itemAtivo = document.querySelector('.ativo')

        if(itemAtivo) {
            itemAtivo.classList.remove('ativo')
        }

        item.classList.add('ativo')
    })
})
