// document ready function
$(function () {
  // store jquery references to elements in const variables
  const headerNav = $('header nav');
  const hamburgerMenu = $('#hamburger-menu');
 

  



  // initialize event handling
  hamburgerMenu.on('click', () => {
    headerNav.toggle();
  });

 

    
   
});