var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function fetchView() {
  var data = document.getElementById("views");
  data.innerHTML = `<br/><div class="loader load"></div>` ;
  fetch('https://viewcount.azurewebsites.net//checkcount')
  .then(result => result.json())
  .then(result => {
    data.innerHTML = "<br />Total View Count : " + result['view'];
  })
} 