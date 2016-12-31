$(document).ready(function(){
      // Add scrollspy to <body>
      $('body').scrollspy({target: ".navbar", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
            });
          }  // End if
        });
      });


 $(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
              });   
            });




$(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop2').on('click', function() {
            $('.imagepreview2').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal2').modal('show');   
              });   
            });

$(function(){
    // Enables popover
    $("[data-toggle=popover]").popover();
});
