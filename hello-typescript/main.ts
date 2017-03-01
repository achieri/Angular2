var minhaVar = 'valor da minha variavel';

function minhaFunc(x,y){
    return x+y;
}
//ES 6 ou 2015
let num = 2;

var numeros = [1,2,3];

numeros.map(function(valor){
    return valor * 2;
});


numeros.map(valor => {valor = valor * 2;
    valor=valor*3;
});


class Matematica{
    soma(x,y){
        return x+y;
    }
}