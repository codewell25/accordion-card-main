


$('#btn-1').click(function () {
    $('#content-1').slideToggle();
    $('#content-2').slideUp();
    $('#content-3').slideUp();
    $('#content-4').slideUp();
})

$('#btn-2').click(function () {
    $('#content-2').slideToggle();
    $('#content-1').slideUp();
    $('#content-3').slideUp();
    $('#content-4').slideUp();
})

$('#btn-3').click(function () {
    $('#content-3').slideToggle();
    $('#content-1').slideUp();
    $('#content-2').slideUp();
    $('#content-4').slideUp();
})

$('#btn-4').click(function () {
    $('#content-4').slideToggle();
    $('#content-1').slideUp();
    $('#content-3').slideUp();
    $('#content-2').slideUp()
})
