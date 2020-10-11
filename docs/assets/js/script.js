$(document).ready(function() {
    // Your jquery scripts in here

    // show / hide quick link content
    $(document).on("click","button.btn_collapse",function() {
        if ($("ul.links").hasClass('fadein')) {
            $("ul.links").removeClass('fadein');
            $(this).removeClass('rotated');
        } else {
            $("ul.links").addClass('fadein');
            $(this).addClass('rotated');
        }
    });


    // back to top event
    $(document).on("click","button#btn_totop",function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

});