function calcularImposto(salario) {
    if (salario > 3000) {
        return (salario - 3000) * 0.10;
    } else {
        return salario * 0.05;
    }
}


let salario = parseFloat(gets());


let imposto = calcularImposto(salario);


print(imposto.toFixed(2));