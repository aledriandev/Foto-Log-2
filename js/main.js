var coments = localStorage.getItem("coments");
coments = JSON.parse(coments);
if(coments == null)
	coments = []; 

$(document).ready(function(){
	muestraDatos()
});

//guarda cada comentario solo si esta completo
function guardarComentario(){
	var client = JSON.stringify({ 
		name : $("#clave").val(), 
		coment : $("#valor").val(),
	});

	if ( $("#clave").val() != "" && $("#valor").val() != "" ) {
		coments.push(client); 
	}

	$("#clave").val('');
	$("#valor").val('');
	localStorage.setItem("coments", JSON.stringify(coments));
	muestraDatos();
	return true; 
}

//mostrar los datos en el div ale
function muestraDatos(){
	$("#ale").html(""); 
	for(var i in coments){ 
		var comen = JSON.parse(coments[i]); 
		$("#ale").append("<div class='ale'><p><b>"+comen.name+"</b></p><p>"+comen.coment+"</p></div>"); 
	}
}

//borra todos los datos
function borrarTodo(){
	localStorage.clear();
	$("#ale").html("");
	coments = [];
}