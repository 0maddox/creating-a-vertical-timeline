 {let arr = []
   let daysString =``
   const title =document.querySelector(`.inview`)
    async function fetchData (){
    const response = await fetch("http://localhost:3000/days")
    arr = await response.json()
    arr.forEach(items =>{
      daysString += `<div class ="titles-container">${items.id}, ${items.title}, ${items.description}</div>`
     })
     title.innerHTML = daysString
  }
  fetchData()
}

(function () {
    "use strict";
  
    
    let items = document.querySelectorAll(".timeline li");
      function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  