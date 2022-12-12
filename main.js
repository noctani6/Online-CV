
// NAV BAR SCROLLING AND SWITCHING COLORS SECTION
let navBar = document.querySelector(".top-navbar");
let iconsTimeLine = document.querySelectorAll(".fa-2x");
let topContentName = document.querySelector(".my-name-real");
let topContainerText = document.querySelector(".top-container-intro");
let buttons = document.querySelectorAll(".navbar-button");
let sunImg = document.querySelector(".sun-img");
let currentUp = 0;
let currentDown = 0;

document.addEventListener("scroll", toggleNavBar);


function toggleNavBar(){
if (window.innerWidth > 1200){
let value = window.scrollY + 672;

sunImg.style.top= value * .5 +'px';
var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st < 100) {

    navBar.classList.replace('top-navbar-active', 'top-navbar');

    if (navBar.classList.contains('top-navbar-active-white')) {
      navBar.classList.replace('top-navbar-active-white', 'top-navbar');

    }

  }else if(st >= 100 && st <= 800){

    if(navBar.classList.contains('top-navbar')){

      navBar.classList.replace('top-navbar', 'top-navbar-active');

    }else if (navBar.classList.contains('top-navbar-active-white')) {

      navBar.classList.replace('top-navbar-active-white', 'top-navbar-active');

    }

  }else if (st >= 801) {

    if (navBar.classList.contains('top-navbar-active')) {

      navBar.classList.replace('top-navbar-active', 'top-navbar-active-white');

    }else if (navBar.classList.contains('top-navbar')) {

      navBar.classList.replace('top-navbar','top-navbar-active-white');
    }


   }
 }
}
if (window.innerWidth < 500) {
  
  document.addEventListener("scroll", toggleNavBarCel);

  // console.log('hello')
  topContentName.textContent = 'R.C.'

  function toggleNavBarCel(){

  // let value = window.scrollY + 672;
  //
  // sunImg.style.top= value * .5 +'px';
  var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st < 5) {

      navBar.classList.replace('top-navbar-active-cel', 'top-navbar');

      if (navBar.classList.contains('top-navbar-active-white-cel')) {
        navBar.classList.replace('top-navbar-active-white-cel', 'top-navbar');

      }

    }else if(st >= 5 && st <= 450){

      if(navBar.classList.contains('top-navbar')){

        navBar.classList.replace('top-navbar', 'top-navbar-active-cel');

      }else if (navBar.classList.contains('top-navbar-active-white-cel')) {

        navBar.classList.replace('top-navbar-active-white-cel', 'top-navbar-active-cel');

      }

    }else if (st >= 51) {

      if (navBar.classList.contains('top-navbar-active-cel')) {

        navBar.classList.replace('top-navbar-active-cel', 'top-navbar-active-white-cel');

      }else if (navBar.classList.contains('top-navbar-cel')) {

        navBar.classList.replace('top-navbar','top-navbar-active-white-cel');
      }


     }
   }


}

// MY SKILLS CONTAINERS THAT OPEN AND CLOSE

let skillsContent = document.getElementsByClassName("skills-content");
// console.log(contentShower);
let skillsHeader = document.querySelectorAll(".skills-header");

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
});



function toggleSkills(){

  let itemClass = this.parentNode.className;


  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills-content skills-close'
    // console.log(this);

}

  if(itemClass === 'skills-content skills-close'){
    this.parentNode.className = 'skills-content skills-open'

  }

}


// TIMELINE SECTION VISISBILITY

let shcoolButton = document.querySelector(".shcool-button");
let workButton = document.querySelector(".work-button");

let schoolInfo = document.querySelectorAll('.university-info');
let workInfo = document.querySelectorAll('.work-info');


// console.log(contentShower);
// let skillsHeader = document.querySelectorAll(".skills-header");

shcoolButton.addEventListener("click",showSchool);
workButton.addEventListener("click",showWork);



function showSchool(){
  shcoolButton.classList.add('button-experience-pressed');
  workButton.classList.remove('button-experience-pressed');
  for(i = 0; i < schoolInfo.length; i++){
    schoolInfo[i].className = 'university-info section-show'
    // console.log(this);
  }
  for(i = 0; i < workInfo.length; i++){
    workInfo[i].className = 'work-info section-noshow'
    // console.log(this);
  }
}

function showWork(){
  workButton.classList.add('button-experience-pressed');
  shcoolButton.classList.remove('button-experience-pressed');

  for(i = 0; i < workInfo.length; i++){
    workInfo[i].className = 'work-info section-show'
    // console.log(this);
  }

  for(i = 0; i < schoolInfo.length; i++){
    schoolInfo[i].className = 'university-info section-noshow'
    // console.log(this);
  }

}

// MEDIA QUERY NAVBAR ACTIVE

let navBarShower = document.querySelector(".mode-switch");
let navBarButtons = document.querySelector(".navbar-buttons");


navBarShower.addEventListener("click",toggleNavBarButtons);

function toggleNavBarButtons(){
let navClass = this.parentNode.className;

  if (navBarButtons.classList.contains('navbar-buttons-hidden')) {
    navBarButtons.classList.replace('navbar-buttons-hidden','navbar-buttons-active');
  }else if (navBarButtons.classList.contains('navbar-buttons-active')) {
    navBarButtons.classList.replace('navbar-buttons-active','navbar-buttons-hidden');
  }

//   for (var i = 0; i < navBarButtons.length; i++) {
//     navBarButtons[i].className = 'navbar-buttons navbar-buttons-hidden'
//     console.log("im here");
//   }
// console.log('i end here');
//   if(navClass === 'navbar-buttons navbar-buttons-hidden'){
//     console.log('i stop here');
//     this.parentNode.className = 'navbar-buttons navbar-buttons-active'
//
//   }

  // if (navBarButtons.classList.contains('navbar-buttons-d')) {
  //   navBarButtons.classList.remove('navbar-buttons-d');
  //   navBarButtons.classList.add('navbar-buttons-active');
  //   console.log("im also here");
  // }
  // navBarButtons.classList.add('navbar-buttons-active');

}


// navBarButtons.classList.add('navbar-buttons-active');
//
//   if (navBarButtons.classList.contains('navbar-buttons-active')) {
//     navBarButtons.classList.remove('navbar-buttons-active');
//     navBarButtons.classList.add('navbar-buttons-d');
//
//   }







// buttons.forEach((item, i) => {
//   item.addEventListener("click", function(){
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     var nowHere = st;
//     console.log(nowHere);
//   })
//   // buttons.addEventListener("clikc", toggleNavBar);
// });

// if (currentDown<1) {
//
//     navBar.classList.replace('top-navbar', 'top-navbar-active');
//     currentDown--;
//     console.log(currentDown);
// }


// var rect = navBar.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
//
// var rectTopContainer = topContainerText.getBoundingClientRect();
// console.log(rectTopContainer.top, rectTopContainer.right, rectTopContainer.bottom, rectTopContainer.left);
//
// let offset = rectTopContainer.top - rect.top;
//
// console.log(offset);
//
//
// function getLocationTry(currentNavBar){
//   var rectTopContainer1 = topContainerText.getBoundingClientRect();
//   console.log(rectTopContainer1.top, rectTopContainer1.right, rectTopContainer1.bottom, rectTopContainer1.left);
//   var offsetNew = rectTopContainer1 - currentNavBar;
//   return offsetNew;
// }
//
// if (offset>182) {
//
//   navBar.classList.replace('top-navbar-active', 'top-navbar');
//
//
// }else if (offset<183) {
//
//     navBar.classList.replace('top-navbar', 'top-navbar-active');
// }
