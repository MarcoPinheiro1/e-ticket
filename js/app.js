function comprar() {
    let setorIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    
    if (isNaN(qtd) || qtd <= 0) {
        alert('Quantidade inválida! Insira Novamente.');
        return;
    }

    if (setorIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (setorIngresso== 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtdPista < qtd) {
        alert('Quantidade indisponível para o setor Pista!');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Parabéns! Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdSuperior < quantidade) {
        alert('Quantidade indisponível para o setor superior');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Parabéns! Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdInferior < quantidade) {
        alert('Quantidade indisponível para o setor inferior');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Parabéns! Compra realizada com sucesso!');
    }
}