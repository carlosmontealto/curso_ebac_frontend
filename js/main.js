$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
            endereco: {
                required: true,
            },
            numero: {
                required: true,
            },
            complemento: {
                required: false,
            }

        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email corretamente',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
            endereco: 'Por favor, insira seu endereço',
            numero: 'Por favor, insira o numero'
        },
        submitHandler: function(form){
            $(form).submit();
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})