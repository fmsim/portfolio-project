$(document).ready(function() {
  /** TOGGLER BUTTON **/
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler').toggleClass('change');
  })
  /** END OF TOGGLER BUTTON **/
  /** NAVBAR **/
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 149) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })
  /** END OF NAVBAR **/
  /** SMOOTH SCROLL **/
  $('.nav-item a').click(function(link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 3000);
  })
  /** END OF SMOOTH SCROLL **/
  /** ISOTOPE JS **/
  // init Isotope
  let $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  /* IMAGES LOADED */
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
  /** END OF ISOTOPE JS **/
})
