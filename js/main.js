
////////////////////////////////////////////////

const fotoLog  = {
	comentarios : [],
    nuevo :  {
        nombre: undefined,
        comentario: undefined
    },

    inicio : function () {
        fotoLog.nuevo.nombre =  $('#clave');
        fotoLog.nuevo.comentario =  $('#valor');
        fotoLog.funciones ();
        fotoLog.mostrarComentarios();
    },

    funciones: function () {
        $('#agregar-comentario').click (fotoLog.agregarComentario) ;
        $('#borrar-todo').click (fotoLog.borrarTodo) ;
    },

    agregarComentario: function (evento) {
        var clave = fotoLog.nuevo.nombre.val();
        var valor = fotoLog.nuevo.comentario.val();
        if (clave != "" && valor != "") {
            localStorage.setItem(clave,valor);
        }
        fotoLog.mostrarComentarios();
        fotoLog.nuevo.nombre.val("");
        fotoLog.nuevo.comentario.val("");
    },

    mostrarComentarios: function(){
		$('#ale').empty();
		for (var i in localStorage) {

			$('#ale').append( `<div class='ale'><p><b> ${i} </b></p>\
                        <p>  ${localStorage[i]} </p></div>`);
		}
    },

    borrarTodo: function (evento) {
    		localStorage.clear();
        $('#ale').empty();
        fotoLog.comentarios=[]
    }
};

$(document).ready ( fotoLog.inicio );