var dec = 0;
document.getElementById("card-1").innerText = dec;
function decrement1() {
  if (dec > 0) {
    dec = dec - 1;
  }
  console.log(dec);

  document.getElementById("card-1").innerText = dec;
}
console.log(document.getElementById("card-1").innerText);
function increment1() {
  dec = dec + 1;
  document.getElementById("card-1").innerText = dec;
}

var dec = 0;
document.getElementById("card-2").innerText = dec;
function decrement2() {
  if (dec > 0) {
    dec = dec - 1;
  }
  document.getElementById("card-2").innerText = dec;
}
function increment2() {
  dec = dec + 1;
  document.getElementById("card-2").innerText = dec;
}

var dec = 0;
document.getElementById("card-3").innerText = dec;
function decrement3() {
  if (dec > 0) {
    dec = dec - 1;
  }
  document.getElementById("card-3").innerText = dec;
}
function increment3() {
  dec = dec + 1;
  document.getElementById("card-3").innerText = dec;
}

var dec = 0;
document.getElementById("card-4").innerText = dec;
function decrement4() {
  if (dec > 0) {
    dec = dec - 1;
  }

  document.getElementById("card-4").innerText = dec;
}
function increment4() {
  dec = dec + 1;
  document.getElementById("card-4").innerText = dec;
}
let hearts = document.getElementsByClassName("fa-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("toggleHeart");
  });
}
