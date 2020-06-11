$(document).ready(
  function () {
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
    $('.with-dropdown-lang').click(
      function () {
        $('.with-dropdown-lang i').toggleClass('fa-angle-up')
        $('.with-dropdown-lang i').toggleClass('fa-angle-down')
        $(this).children('.dropdown').toggleClass('hidden')
      }
    )
    // Aggiungo funzionalità al click del tasto scarica app
    $('.scarica').click(
      function () {
        $('.downloadPage').removeClass('hidden')
      }
    )
    // Aggiungo funzionalità al click del tasto chiudi pagina scarica app
    $('.downloadPage > i').click(
      function () {
        $('.downloadPage').addClass('hidden')
      }
    )
  }
)
