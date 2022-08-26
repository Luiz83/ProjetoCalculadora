var numA = 0
var numB = 0
var resultado = []
var continuar = 1

while (continuar == 1) {
    numA = parseInt(prompt("Insira um valor para A"))
    numB = parseInt(prompt("Insira um valor para B"))

    var opcao = prompt("Qual operação deseja fazer? 1 - Somar / 2 - Subtrair / 3 - Multiplicar/ 4 - Dividir")

    if (opcao == 1) {
        console.log("O resultado da soma é: " + Somar(numA, numB))
    } else if (opcao == 2) {
        console.log("O resultado da subtração é: " + Subtrair(numA, numB))
    } else if (opcao == 3) {
        console.log("O resultado da multiplicação é: " + Multiplicar(numA, numB))
    } else if (opcao == 4) {
        console.log("O resultado da divisão é: " + Dividir(numA, numB))
    }

    continuar = prompt("Deseja fazer outra operação? 1 - Sim / 2 - Não")
}

function Somar(numUm, numDois) {
    return numUm + numDois
}

function Subtrair(numUm, numDois) {
    return numUm - numDois
}

function Multiplicar(numUm, numDois) {
    return numUm * numDois
}

function Dividir(numUm, numDois) {
    return numUm / numDois
}
