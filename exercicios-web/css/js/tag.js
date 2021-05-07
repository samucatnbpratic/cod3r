const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)

    //aqui estamos perguntado se não estiver contido na lista de classes 'nolabel'
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        //innerHTML - manipulamos a troca de conteudo do elemento sem que precise recarregar a tela
        label.innerHTML = tagName 
        //inserimos antes do primeiro elemento que estiver dentro do nosso elemento
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})