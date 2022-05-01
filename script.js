function insert(num) {
    var number = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = number + num;
}

function limpar() {
    document.getElementById('resultado').innerHTML = " ";

}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1); // removendo um numeor de cada vez

}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    if(resultado){
        var namberString = document.getElementById('resultado').innerHTML = eval(resultado);


        const converter = parseInt(namberString);
        const formato = converter.toFixed(2);
        document.getElementById('resultado').innerHTML = formato;
        // formatando resuldado/
    }
}
