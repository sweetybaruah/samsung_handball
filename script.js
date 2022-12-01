checker = true;

Draggable.create('#controller', {
  type: "rotation",
  snap: {
    rotation: function (value) {
      return Math.round(value / 45) * 45;
    }
  },
  trigger: "#knob",
  bounds: { maxRotation: 360, minRotation: 0 },
  onClick: function () {
    console.log("clicked");
  }, onDrag: function () {
    console.log('dragging');
    console.log(this.rotation);
    if(checker){
      if(this.rotation>320){
        checker = false;
        goalDrawEnd();
      }
    }

  }, onDragStart: function () {
    gsap.to('.element2', { opacity: 0, display: 'none', duration: 1 })
  }
  ,
  onDragEnd: function () {
    console.log("drag ended");
  }
});
var slide2 = document.querySelector('.slide2')
var slide3 = document.querySelector('.slide3')
var bg2 = document.querySelector('.bg2')
var element6 = document.querySelector('.element6')
var element7 = document.querySelector('.element7')
var element8 = document.querySelector('.element8')
var element9 = document.querySelector('.element9')
function goalDrawEnd() {
  
  gsap.to('.element3', { opacity: 0, display: 'none', duration: 1 })
  gsap.to('.element1', { opacity: 0, display: 'none', duration: 1 })
  gsap.to('.element4', { opacity: 0, display: 'none', duration: 1 })
  gsap.to('.element5', { opacity: 0, display: 'none', duration: 1 })
  setTimeout(function(){
    gsap.to('.slide2', { opacity: 1, display: 'block', duration: 1 })
    gsap.to('.element6', { opacity: 1, display: 'block', duration: 1 })
    gsap.to('.element7', { opacity: 1, display: 'block', duration: 1 })
    gsap.to('.element8', { opacity: 1, display: 'block', duration: 1 })
    gsap.to('.element9', { opacity: 1, display: 'block', duration: 1 })
    setTimeout(function(){
      gsap.to('.slide2', { opacity: 0, display: 'none', duration: 1 })
      gsap.to('.slide3', { opacity: 1, display: 'block', duration: 1 })
    },4000)
  },1000)
 
  //  gsap.to('.slide2', { opacity: 0, display: 'none', duration: 1})
  //  gsap.to('.slide3', { opacity: 1, display: 'block', duration: 7})
  //  gsap.to('.element10', { opacity: 1, display: 'block', duration: 7})
  // gsap.to('.light', { opacity: 1, display: 'block', duration: 1 }, ">")
  }