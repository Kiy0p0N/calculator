$(document).ready(function(){

    // 1 - Seleciona o campo de exibição e cria uma variável para armazenar os valores inseridos
    const display = $("#display");
    let displayText = '';

    // 2 - Adiciona números ao display quando um botão numérico é clicado
    $('.numero').click(function(){
        displayText += $(this).text(); // Obtém o texto do botão clicado e adiciona à variável displayText
        display.val(displayText); // Atualiza o campo de exibição
    });

    // 3 - Adiciona operadores ao display quando um botão de operador é clicado
    $('.operador').click(function(){
        displayText += $(this).text(); // Obtém o texto do operador clicado e adiciona à variável displayText
        display.val(displayText); // Atualiza o campo de exibição
    });

    // 4 - Limpa o display ao clicar no botão "C"
    $(".limpar").click(function(){
        display.val(''); // Limpa a tela
        displayText = ''; // Reseta a variável que armazena a equação
    });

    // 5 - Realiza a operação matemática ao clicar no botão "="
    $(".igual").click(function(){
        try{
            let operation = eval(displayText); // Usa eval() para calcular a equação armazenada
            display.val(operation); // Exibe o resultado no display
            displayText = operation; // Atualiza a variável para continuar operações com o resultado
        } catch{
            alert('Erro! Expressão inválida.'); // Exibe um alerta caso a equação seja inválida
        }
    });

});
