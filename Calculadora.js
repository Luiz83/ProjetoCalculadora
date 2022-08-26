var numA = 0
var numB = 0
var resultados = []
var contador = 0
var continuar = 1

while (continuar == 1) {
    numA = SolicitarNumero()
    numB = SolicitarNumero()

    RealizarOperacao()

    continuar = prompt("Deseja fazer outra operação? 1 - Sim / 2 - Não")
}

function RealizarOperacao() {
    var opcao = prompt("Qual operação deseja fazer? 1 - Somar / 2 - Subtrair / 3 - Multiplicar / 4 - Dividir / 5 - Exibir Resultados")

    if (opcao == 1) {
        resultados[contador] = Somar(numA, numB)
        console.log("O resultado da soma é: " + resultados[contador])
        contador++
    } else if (opcao == 2) {
        resultados[contador] = Subtrair(numA, numB)
        console.log("O resultado da subtração é: " + resultados[contador])
        contador++
    } else if (opcao == 3) {
        resultados[contador] = Multiplicar(numA, numB)
        console.log("O resultado da multiplicação é: " + resultados[contador])
        contador++
    } else if (opcao == 4) {
        resultados[contador] = Dividir(numA, numB)
        console.log("O resultado da divisão é: " + resultados[contador])
        contador++
    } else if (opcao == 5) {
        ExibirHistorico()
    } else {
        continuar = 2
    }
}

function SolicitarNumero() {

    return parseInt(prompt("Insira um valor"))
}

function ExibirHistorico() {
    for (var index = 0; index < contador; index++) {
        console.log(resultados[index])
    }
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
