$(document).ready(function() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  

    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  });

  function initializeGrid() {

    console.log("hello");
    document.getElementById('consumer-grid').style.display = 'flex';
    document.getElementById('professional-grid').style.display = 'none';
  

    var consumerHeading = document.getElementById('consumer-heading');
    consumerHeading.classList.add('selected');

  

    var professionalHeading = document.getElementById('professional-heading');
    professionalHeading.classList.remove('selected');
    professionalHeading.style.color = '';
    professionalHeading.style.textDecoration = '';
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    initializeGrid();
  });

  
  function showGrid(gridType) {

    var consumerHeading = document.getElementById('consumer-heading');
    var professionalHeading = document.getElementById('professional-heading');


    consumerHeading.classList.remove('selected');
    professionalHeading.classList.remove('selected');


    if (gridType === 'consumer') {
      consumerHeading.classList.add('selected');
    } else if (gridType === 'professional') {
      professionalHeading.classList.add('selected');
    }

    if (gridType === 'consumer') {
      document.getElementById('consumer-grid').style.display = 'flex';
      document.getElementById('professional-grid').style.display = 'none';
    } else if (gridType === 'professional') {
      document.getElementById('consumer-grid').style.display = 'none';
      document.getElementById('professional-grid').style.display = 'flex';
    }
  }


  