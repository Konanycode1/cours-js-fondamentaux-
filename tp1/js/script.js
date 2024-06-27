//$('body').html('hello world jquery').css('color','green')
const text = $('.para').text()
$('.para').hover(
    function (){
        $(this).text("ceci n'est pas un paragraphe")
    },
    function (){
        $(this).text(text)
    }
)
