(function () {
    var items = document.querySelectorAll(".timeline li");
    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
})

fetch("http://localhost:3000/days")
.then((response) => response.json())
.then((data) => console.log(data))