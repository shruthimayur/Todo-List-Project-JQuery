//check off the specific todos by clicking on them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on the X to delete the todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding a listener for the input element
$('input[type="text"]').on("keypress", function(event){
	if(event.which === 13){
		//define a variable to retrieve the todo text entered
		var todoText = $(this).val();
		//setter, clearing out the input text
		$(this).val("");
		//create a new todo, which is an li under the ul according to html
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$('input[type="text"]').fadeToggle();
});