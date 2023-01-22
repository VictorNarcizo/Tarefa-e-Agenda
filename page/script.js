$("#formulario_tarefa").submit(function(e){
    e.preventDefault();
    var titulo = $("#task_title").val();
    var descricao = $("#task_desc").val();
    var data = $("#task_date").val();

    $("#table_task").append("<tr><td>"+titulo+"<tr><td>"+descricao+"<tr><td>"+data+"<tr><td>");
});