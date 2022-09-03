// document.addEventListener(DOMLontentLoaded, init)
fetch("http://localhost:3000/days")
.then((response) => response.json())
.then((data) => console.log(data))