$(document).ready(() => {

    let overlay = $('#overlay');
    let open_modal = $('.open_modal');
    let close = $('.modal_close, #overlay');
    let modal = $('.modal_div');

     open_modal.click( function(e) {
         e.preventDefault();
         let div = $(this).attr('href');
         overlay.fadeIn(400,
                () => {
                 $(div)
                     .css('display', 'block')
                     .animate({opacity: 1, top: '25%'}, 200);
         });
     });

     close.click( () => {
            modal.animate({opacity: 0, top: '50%'}, 200,
                 () => {
                     $(this).css('display', 'none');
                     overlay.fadeOut();
                 }
             );
     });

    $.get('../css/style.scss', (scss) => {
        let sass  = new Sass();
        sass.compile(scss, (result) => {
            // console.log(result.text);
            $('<style></style>').insertAfter($('head')).html(result.text);

            // $.ajax({
            //     'url': 'main.php',
            //     'type': 'post',
            //     'data': result.text,
            //     success: (data) => {
            //         console.log(data);
            //     },
            //     error:  (data) => {
            //         console.log(data);
            //     }
            //
            // });

        });
    });

});