/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function blogDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

//Image modal
var modal = document.getElementsByClassName('img-modal')[0];
var modalImg = document.getElementsByClassName('blog-img')[0];
modalImg.onclick = function(){
  modal.style.display = "block";
}
var closeSpan = document.getElementsByClassName('img-modal-close')[0];
closeSpan.onclick = function() {
  modal.style.display = "none";
}


// Insert email contact in footer on page load (to avoid bots scraping email address)

window.onload = function() {
  document.getElementById("mailing").innerHTML =
    "<a href='mailto:callum_anderson@hotmail.com' target='_blank'>callum_anderson@hotmail.com</a>";
}
