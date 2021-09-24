$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'url');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     "https://60376bfd5435040017722533.mockapi.io/form",
        type:     "POST",
        dataType: "html",
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Запрос принят!');
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка отправки!');
    	}
 	});
}


