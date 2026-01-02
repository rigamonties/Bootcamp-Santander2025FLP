const entrada = gets(); 

function calcularSaque(valor) { 
    let valorSaque = parseInt(valor);

    if (valorSaque < 10 || valorSaque > 1000 || valorSaque % 10 !== 0) {
        return "Insira uma quantia valida";
    }

    let notas50 = 0;
    let notas20 = 0;
    let notas10 = 0;

    while (valorSaque >= 50) {
        notas50++;
        valorSaque -= 50;
    }

    while (valorSaque >= 20) {
        notas20++;
        valorSaque -= 20;
    }

    while (valorSaque >= 10) {
        notas10++;
        valorSaque -= 10;
    }

    return `50:${notas50} 20:${notas20} 10:${notas10}`;
}

print(calcularSaque(entrada));