
////////////////////////////////////////////////

const fotoLog  = {
		comentarios : [],
    nuevo :  {
        nombre: undefined,
        comentario: undefined
    },

    init : function () {
        fotoLog.nuevo.nombre =  $('#clave');
        fotoLog.nuevo.comentario =  $('#valor');
        fotoLog.setup ();
        fotoLog.mostrarComentarios();
    },

    setup: function () {
        $('#agregar-comentario').click (fotoLog.agregarComentario) ;
        $('#borrar-todo').click (fotoLog.borrarTodo) ;
    },

    agregarComentario: function (event) {
        fotoLog.comentarios.push(fotoLog.nuevo);
        localStorage.setItem("comentarios",fotoLog.comentarios);
        $('#ale').append( `<div class='ale'><p><b> ${fotoLog.nuevo.nombre.val()} </b></p>\
                            <p>  ${fotoLog.nuevo.comentario.val()} </p></div>`);
    },

    mostrarComentarios: function(){
    		$('#ale').empty();
    		for (var i in fotoLog.comentarios) {
    				var comentariosAqui = fotoLog.comentarios[i];
    				$('#ale').append( `<div class='ale'><p><b> ${comentariosAqui.nombre} </b></p>\
                            <p>  ${comentariosAqui.comentario} </p></div>`);
    		}
    },

    borrarTodo: function (event) {
    		localStorage.clear();
        $('#ale').empty();
        fotoLog.comentarios=[]
    }
};

$(document).ready ( fotoLog.init );