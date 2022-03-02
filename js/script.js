// filter tranding
let categorys = document.querySelectorAll('#our .category__item'); 
let products = document.querySelectorAll('#our .product__item');
let trendingCategorys = document.querySelectorAll('#trending .category__item');
let trendingProducts = document.querySelectorAll('#trending .product__item');

let dot = document.querySelectorAll('#trending .dots__item');

for(let i = 0; i < categorys.length; i++) {
  categorys[i].addEventListener('click', function() {
    for (let j = 0; j < categorys.length; j++) {
      categorys[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    for (let k = 0; k < products.length; k++) {
      products[k].classList.remove('active');
      products[k].classList.add('hide');

      if(products[k].getAttribute('data-item') == dataFilter || dataFilter == 'all-products') {
        products[k].classList.remove('hide');
        products[k].classList.add('active');
      }
    }
  })
}

for(let i = 0; i < trendingCategorys.length; i++) {
  trendingCategorys[i].addEventListener('click', function() {
    for (let j = 0; j < trendingCategorys.length; j++) {
      trendingCategorys[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    for (let k = 0; k < trendingProducts.length; k++) {
      trendingProducts[k].classList.remove('active');
      trendingProducts[k].classList.add('hide');

      if(trendingProducts[k].getAttribute('data-item') == dataFilter || dataFilter == 'top-products') {
        trendingProducts[k].classList.remove('hide');
        trendingProducts[k].classList.add('active');
      }
    }
  })
}

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener('click', function() {
    for (let j = 0; j < dot.length; j++) {
      dot[j].src='./img/dots.svg';
    }
    this.src='./img/dots-active.svg';

    let dataFilter = this.getAttribute('date-dot-active');
    for (let k = 0; k < trendingProducts.length; k++) {
      trendingProducts[k].classList.add('dot-hide');

      if(trendingProducts[k].getAttribute('date-dot') == dataFilter) {
        trendingProducts[k].classList.remove('dot-hide');
      }
    }
  })
}

//sliders


document.querySelector('.feedback_left-arrow').onclick = left;
document.querySelector('.feedback_right-arrow').onclick = right;
let feedbackItem = document.querySelectorAll('.feedback-slide-item');
let inner  = document.querySelector('.feedback-slide');
let i = 0;
let d = 0;
let timer;
let dotsTimer;
autoplay();

let dotsItem = document.querySelectorAll('.header-right .dots .dots__item');
let slidersItem = document.querySelectorAll('.sliders .sliders__item');
let sliders  = document.querySelector('.sliders');
// autoplaySliders();

window.onload = autoplaySliders();

function autoplay(){
  timer = setTimeout(right, 1500)
}


function left() {
  feedbackItem[i].classList.add('hide');
  i--;
  if(i < 0) {
    i = feedbackItem.length - 1;
  }
  feedbackItem[i].classList.remove('hide');
  clearTimeout(timer);
  autoplay();
}

function right() {
  feedbackItem[i].classList.add('hide');
  i++;
  if(i >= feedbackItem.length) {
    i = 0;
  }
  feedbackItem[i].classList.remove('hide');
  clearTimeout(timer);
  autoplay();
}

inner.addEventListener('mouseover', function(){
  clearTimeout(timer);
})

inner.addEventListener('mouseout', function(){
  autoplay();
})

function sliderLeft() {
  slidersItem[d].style.opacity = 0;
  dotsItem[d].classList.remove('active');
  d--;
  if(i < 0) {
    d = slidersItem.length - 1;
  }
  slidersItem[d].style.opacity = 1;
  dotsItem[d].classList.add('active');
  clearTimeout(dotsTimer);
  autoplaySliders();
}

function sliderRight() {
  slidersItem[d].style.opacity = 0;
  dotsItem[d].classList.remove('active');
  d++;
  if(d >= slidersItem.length) {
    d = 0;
  }
  slidersItem[d].style.opacity = 1;
  dotsItem[d].classList.add('active');
  clearTimeout(dotsTimer);
  autoplaySliders();
}

for(let j = 0; j < dotsItem.length; j++){
  dotsItem[j].addEventListener('click', function(){
    clearTimeout(dotsTimer);
    document.querySelector('.dots .active').classList.remove('active');
    this.classList.add('active');
    var attr = this.getAttribute('data-slide-to');
    d = attr;
    for(var g = 0; g < slidersItem.length; g++){
      slidersItem[g].style.opacity = 0;
    }
    slidersItem[attr].style.opacity = 1;
    autoplaySliders();
  })
}

function autoplaySliders(){
  dotsTimer = setTimeout(sliderRight, 1500)
}

sliders.addEventListener('mouseover', function(){
  clearTimeout(dotsTimer);
})

sliders.addEventListener('mouseout', function(){
  autoplaySliders();
})

// Bars
document.querySelector('.collection').addEventListener('click', function (e) {
  e.preventDefault();
  if (document.querySelector(".side-bar").classList.contains("side-bar-none")) {
    document.querySelector(".side-bar").classList.remove('side-bar-none');
  } else {
    document.querySelector(".side-bar").classList.add('side-bar-none');
  }
})


document.querySelector('.fa-bars').addEventListener('click', function(){
  
    if(document.querySelector(".bars-menu").classList.contains("none")){
      document.querySelector(".bars-menu").classList.remove('none');
    }
    else{
      document.querySelector(".bars-menu").classList.add('none');
    }
});