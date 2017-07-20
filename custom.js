'use strict'

///////////////////////// No Scroll Effect /////////////////////////

function noscroll() {
  window.scrollTo(0, 0)
}

setTimeout(function () {
  window.removeEventListener('scroll', noscroll)
},30000)

window.addEventListener('scroll', noscroll)

var down = document.querySelector('.down')

down.addEventListener('click', function() {
  window.removeEventListener('scroll', noscroll)
  var anchor = this.getAttribute('href')
  var dest = document.querySelector(anchor)
  window.scroll({
    top: dest.offsetTop,
    behavior: 'smooth'
  })
})

///////////////////////// Modal /////////////////////////

const modal = document.querySelector('.overlay')
const modalContent = document.querySelector('.overlay-content')
const html = document.querySelector('html')

// Add js class to html element for accessibility (see CSS)
html.classList.add('js')

// Create button elements
var close = document.createElement('a')

// Add classes and text to buttons
close.classList.add('close')
close.setAttribute('href', '#')
close.innerHTML = 'Close'

// Insert close buton inside .overlay-content element
modalContent.appendChild(close)

open = document.querySelector('.join')
close = document.querySelector('.close')

modal.classList.add('hide-text')

open.addEventListener('click', function(e) {
  e.preventDefault
  modal.classList.remove("hide-text")
});

close.addEventListener('click', function(e) {
  e.preventDefault
  modal.classList.add('hide-text')
});


///////////////////////// Stellar Parallax /////////////////////////
//////////////http://markdalgleish.com/projects/stellar.js/ ///////

$.stellar();


///////////////////////// Donation Counter /////////////////////////

// const donations = document.querySelector('.donations')
//
// donations.innerHTML = 0
//
// var counter = 0;
//
// var n = 0;
//
// function increment(){
//   setTimeout(function () {
//     n++;
//     console.log(n)
//   },1000)
// }
//
// for (var i = 0; i < 1200; i++) {
//   increment()
// }


// setTimeout(function() {
//   donations.innerHTML = i++
// },500)



/////////////////////////// Donation Counter ////////////////////////////
////https://codepen.io/hi-im-si/pen/uhxFn//A PEN BY Simon Shahriveri////

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });

});
