const n = parseInt(gets());

let totalTransacoes = 0;

for (let i = 0; i < n; i++) {
  totalTransacoes += parseInt(gets());
}

print(`${totalTransacoes} transacoes no total`);