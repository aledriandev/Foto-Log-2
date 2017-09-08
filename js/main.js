
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

    borrarTodo: function (event) {
        $('#ale').empty();
    }
};

$(document).ready ( fotoLog.init );