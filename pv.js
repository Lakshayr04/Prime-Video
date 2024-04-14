$(document).ready(function() {
    //hamburger icon
    var isMenuDisplayed = false;
    $('.hamburger').click(function() {
        if(isMenuDisplayed === false){
            $('.nav-links').toggleClass('active');
            $("#hamburger").hide();
            $("#close-button").show();
            isMenuDisplayed = true;
        }
    });

     // Close the navigation menu when the close button is clicked
    $('.close-button').click(function() {
        $('.nav-links').removeClass('active');
        // $(".close-button").hide();
            $(".overlay").removeClass("active");
            $("#close-button").hide();
            $("#hamburger").show();
            isMenuDisplayed = false;
    });

     $(".overlay").click(function() {
        $(".dropdown").removeClass("active");
        $(".overlay").removeClass("active");
    });

             
    // Hide navigation links when the screen size becomes larger
    $(window).resize(function() {
        if ($(window).width() >602) {
            $('.nav-links').removeClass('active');
        } 
    });
});