const entrada = gets(); 

function calcularSaldo(operacoes) {
    let saldo = 0;

    const listaOperacoes = operacoes.split(',');

    listaOperacoes.forEach(operacao => {
        const [tipo, valorStr] = operacao.trim().split(' ');
        const valor = parseInt(valorStr); 

        if (tipo === 'deposito') {
            saldo += valor;
        } else if (tipo === 'saque') {
            saldo -= valor;
        }

    });

    return saldo.toString();
}

print(calcularSaldo(entrada));