
const rotationSection = document.querySelector('.nature');
const section = document.querySelector('.nature-scroll');
const foot = document.querySelector('.foot');


window.addEventListener('scroll', () => {
  let height = window.innerHeight;
  let width = window.innerWidth;

  let windowTop = window.pageYOffset || document.documentElement.scrollTop;
  let sectionTop = section.offsetTop;
  let footTop = foot.offsetTop;

  if(windowTop >= sectionTop){
    if(footTop - height -1>= windowTop){
    rotationSection.style.transform = `translateX(${((sectionTop - windowTop)*width)/height}px)`;
    }else{
      rotationSection.style.transform = `translateX(-400vw)`
    }
  }else{
    rotationSection.style.transform = `translateX( 0px)`
  }

});

