// Aggiungo funzionalità al passaggio del mouse sulla sezione
$('.with-dropdown').mouseenter(
  function () {
    $(this).children('.dropdown').removeClass('hidden')
  }
)
// Aggiungo funzionalità all'allontanamento del mouse dalla sezione
$('.with-dropdown').mouseleave(
  function () {
    $(this).children('.dropdown').addClass('hidden')
  }
)
// Aggiungo funzionalità al click del mouse sulla sezione
$('.with-dropdown').click(
  function () {
    $(this).children('.dropdown').toggleClass('hidden')
  }
)
// Aggiungo funzionalità al click del mouse sulla lingua
$('.lang').click(
  function () {
    $('.lang i').toggleClass('fa-angle-up')
    $('.lang i').toggleClass('fa-angle-down')
  }
)
