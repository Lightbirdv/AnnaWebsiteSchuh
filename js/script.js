var slider = new KeenSlider("#my-keen-slider1", {
  created: function (instance) {
    var dots_wrapper = document.getElementById("dots");
    var slides = document.querySelectorAll(".keen-slider__slide");
    var index = 3;
    for (idx = 0; idx < index; idx++) {
      var dot = document.createElement("button");
      dot.classList.add("dot");
      dots_wrapper.appendChild(dot);
      dot.addEventListener("click", function () {
        instance.moveToSlide(idx);
      });
    };
    updateClasses(instance);
  },
  slideChanged(instance) {
    updateClasses(instance);
  }
});

function updateClasses(instance) {
  var slide = instance.details().relativeSlide;

  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, idx) {
    idx === slide
      ? dot.classList.add("dot--active")
      : dot.classList.remove("dot--active");
  });
}

var slider = new KeenSlider("#my-keen-slider2", {
  slidesPerView: 2,
  mode: "free-snap",
  spacing: 15,
  centered: true,
  loop: false,
})

var slider = new KeenSlider("#my-keen-slider3", {
  slidesPerView: 2,
  mode: "free-snap",
  spacing: 15,
  centered: true,
  loop: false,
})

var slider = new KeenSlider("#my-keen-slider4", {
  slidesPerView: 2,
  mode: "free-snap",
  spacing: 15,
  centered: true,
  loop: false,
})

var slider = new KeenSlider("#testimonial-slider", {
  slidesPerView: 3,
  rtl: true,
  spacing: 50,
  loop: true,
})

var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

for (idx = 0; idx < 7; idx++) {
  var NavA = document.getElementsByClassName('nav-item')[idx];
  NavA.addEventListener('click', toggleNavigation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
  anchor.addEventListener('click', function (e) { 
    e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); 
  }); 
});