$(document).ready(function() {

$('.bloc').hover(
    function () {
        console.log('Attention, vous entrez dans la zone rouge')
    },
    function () {
        console.log('')
    }
);
$('.bloc').on('mousedown', function (){
    $(this).css('border','2px green solid')
    $('header').append('<h2 class="delet">UP</h2>')
});

$('.bloc').on('mouseup', function (){
    $(this).css('border','2px red solid')
    $('footer').append('<h2 class="delet1">Down</h2>')
});

$('header').on('click', function (e) {
    if(e.target.className === "delet"){
        e.target.remove()
    }
  });
  $('footer').on('click', function (e) {
    if(e.target.className === "delet1"){
        e.target.remove()
    }
  });
});


