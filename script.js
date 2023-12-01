var numeroParaEncontrar= 0;
var tentativas = 0;

function atualizar(){
    var elemento = document.
    getElementById('inputNumero');

    //resetar valor//
    elemento.value ='';

    numeroParaEncontrar = parseInt
    (Math.random() * 100);

    console.log('numero: '+
    numeroParaEncontrar);
};

atualizar();

function verificarNumeros() {
    var elemento = document.
    getElementById('inputNumero');

    var numero = elemento.value;

    if(numero > 100 || numero < 0) {
        alert('Aposta inválida!🦆')
        return
    }
    if( numero > numeroParaEncontrar){
        alert('💥 O nº é MENOR!');
        tentativas++
    }
    else if( numero < numeroParaEncontrar){
        alert('💥 O nº é MAIOR!');
        tentativas++
    
   } else {
        alert('🏆Você venceu!, foram '+ tentativas +' tentativas!')
    }
};