/**/

document.addEventListener('DOMContentLoaded', (event) => {

  document.querySelectorAll(".lang-toggle").forEach(element => {
    element.addEventListener("click", () => {
      document.querySelectorAll(".de, .en").forEach(deElement => {
        deElement.classList.toggle("active");
      });

      let de_elements = document.querySelectorAll("[lang=\"de\"]:not(html)");
      let en_elements = document.querySelectorAll("[lang=\"en\"]:not(html)");

      if(element.querySelector(".active").classList.contains("de")){
        console.log("de");
        en_elements.forEach(function(element){
          element.style.display = "none";
        });
        de_elements.forEach(function(element){
          element.style.display = "block";
        });
      }else{
        console.log("en");
        de_elements.forEach(function(element){
          element.style.display = "none";
        });
        en_elements.forEach(function(element){
          element.style.display = "block";
        });
      }

    });
  });

  //scroll spy for header menu
  let last_known_scroll_position = 0;
  let ticking = false;
  let header_shown = false;

function doSomething(scroll_pos) {
  //console.log(scroll_pos);
  let x = document.querySelector(".hero").offsetHeight;
  if(scroll_pos > x && !header_shown){
    header_shown = true;
    document.querySelector("header").classList.add("header-shown");
    console.log("show");
  }
  if(scroll_pos <= x && header_shown){
    header_shown = false;
    document.querySelector("header").classList.remove("header-shown");
    console.log("hide");
  }
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
    }
  });

  //add scroll jumps
  document.querySelector('.scroll-down').addEventListener("click",function(){
    document.querySelector('main').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('.logo').addEventListener("click",function(){
    document.querySelector('.hero').scrollIntoView({
      behavior: 'smooth'
    });
  });


});
