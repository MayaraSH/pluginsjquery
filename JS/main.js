// Função que garante que todo o código seja executado somente depois que o HTML estiver completamente carregado
$(document).ready(function(){

    // Inicializa o carrossel de imagens com o plugin Slick
    $('#carousel-imagens').slick({
        autoplay: true // Define que o carrossel muda as imagens automaticamente
    });

    // Aplica uma máscara no campo de telefone
    $('#telefone').mask('(00) 00000 - 0000', { // Máscara no formato de celular brasileiro
        placeholder: ('(DDD) 12345-6789') // Exibe um texto de exemplo no campo
    });

    // Aplica uma máscara no campo de CPF
    $('#cpf').mask('000.000.000-00', { // Máscara no formato de CPF brasileiro
        placeholder: '123.456.789-00' // Exibe um exemplo no campo
    });

    // Aplica uma máscara no campo de CEP
    $('#cep').mask('00000-000', { // Máscara no formato de CEP brasileiro
        placeholder: '012345-678' // Placeholder de exemplo no campo
    });

    // Ativa a validação do formulário utilizando o plugin jQuery Validate
    $('form').validate({
        // Define as regras de validação para cada campo do formulário
        rules: {
            nome: { // Campo nome
                required: true // Torna obrigatório preencher
            },
            email: { // Campo e-mail
                required: true, // É obrigatório
                email: true // Valida se o formato é um e-mail válido (ex: nome@dominio.com)
            },
            telefone: { // Campo telefone
                required: true // Campo obrigatório
            },
            cpf: { // Campo CPF
                required: true // Campo obrigatório
            },
            endereco: { // Campo endereço
                required: true // Campo obrigatório
            },
            cep: { // Campo CEP
                required: true // Campo obrigatório
            },
        },

        // Função executada quando o formulário é válido e é enviado corretamente
        submitHandler: function (form) {
            // Exibe uma mensagem de sucesso para o usuário
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            // Limpa todos os campos do formulário (reseta o formulário)
            form.reset();
        },

        // Função executada quando o usuário tenta enviar o formulário com campos inválidos
        invalidHandler: function (evento, validador) {
            // Exibe um alerta avisando que é necessário preencher todos os campos obrigatórios
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    });

});
