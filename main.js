function novaTarefa(){
    const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#tarefa').val('');
}

function riscaTarefa(){
    $('ul').on('click','li',function(){
        $(this).attr("class", "riscado");
    })
}

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        novaTarefa();   
    })
    riscaTarefa();
})

