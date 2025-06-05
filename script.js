document.addEventListener "DOMContentLoaded", function () {
    const botaoDeAcessibilidade = document.getElementById ("botao-acessibilidade")
    const opcaoDeAcessibilidade = document.getElementById ("opcoes-acessibilidade")

    botaoDeAcessibilidade.addEventListener("click" , function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcaoDeAcessibilidade.classList.toggle(spresena-lista)
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alternar-contraste')

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'
    })

     alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})