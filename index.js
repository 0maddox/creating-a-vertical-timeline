  let arr = []
   let daysString =``
   const title =document.querySelector(`.titles-container`)
    async function fetchData (){
    const response = await fetch("http://localhost:3000/days")
    arr = await response.json()
    arr.forEach(items =>{
      daysString += `<span>${items.title}</span>`
     })
     title.innerHTML = daysString
  }
  fetchData()

//   function displayDays(days){
//     let dayDisplay= document.getElementById(`div`)
//     for (let element of days){
//       let li = document.createElement(`li`)
//       li.className =`day`
//       dayDisplay.appendChild(li)
//     }
//   }
// (function () {
//     var items = document.querySelectorAll(".timeline li");
//     function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
// //callbacks
//   function callbackFunc() {
//     for (var i = 0; i < items.length; i++) {
//       if (isElementInViewport(items[i])) {
//         items[i].classList.add("in-view");
//       }
//     }
//   }

//   // event listeners
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
// })()
 
// (function () {
//   "use strict";
//   var items = document.querySelectorAll(".timeline li");

//     function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function callbackFunc() {
//     for (var i = 0; i < items.length; i++) {
//       if (isElementInViewport(items[i])) {
//         items[i].classList.add("in-view");
//       }
//     }
//   }

//   // listen for events
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
// })();

