alert('Bem vindo!');
numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * 1000 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute nao for igual ao numero secreto.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto e menor que ${chute}`);
        } else {
            alert(`O numero secreto e maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;

    }

}



