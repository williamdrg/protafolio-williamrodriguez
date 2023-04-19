$(document).ready(function () {
    $('#btnSend').click(function (){
        
        let errors = '';

        // validando el nombre --- val = valor
        if ($('#names').val() === '') {
            errors += '<p>Escriba un nombre</p>';
            $('#names').css('border-bottom-color', '#F14B4B') //función para el subrayado rojo
        } else {
            $('#names').css('border-bottom-color', '#d1d1d1')
        }

        if ($('#email').val() === '') {
            errors += '<p>Escriba un correo electrónico</p>';
            $('#email').css('border-bottom-color', '#F14B4B')
        } else {
            $('#email').css('border-bottom-color', '#d1d1d1')
        }

        if ($('#subject').val() === '') {
            errors += '<p>Escriba un asunto</p>';
            $('#subject').css('border-bottom-color', '#F14B4B')
        } else {
            $('#subject').css('border-bottom-color', '#d1d1d1')
        }

        if ($('#comentUser').val() === '') {
            errors += '<p>Escriba un nombre</p>';
            $('#comentUser').css('border-bottom-color', '#F14B4B')
        } else {
            $('#comentUser').css('border-bottom-color', '#d1d1d1')
        }
      
        // enviando mensaje
        if (errors  === '' == false) {
            let messageModal = '<div class="modal__wrap">' + 
                                    '<div class="message__modal">' +
                                        '<h3>Errores encontrados</h3>' +
                                        errors+
                                        '<span id="btn__close">Cerrar</span>' +
                                    '</div>' +
                                '</div>'
            //append: añade contenido a un elemento
            $('body').append(messageModal);
        }
        // cerrando modal
        $('#btn__close').click(function () {
            $('.modal__wrap').remove();
        });

    });
});