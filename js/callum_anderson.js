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
var modal = document.getElementById('img-modal');
var modalImg = document.getElementsByClassName('blog-img');

for (i=0; i<modalImg.length; i++)
  {
    modalImg[i].onclick = function(){
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width > 767) {
      modal.style.display = "block";
      modal.children[1].src = this.src.replace("thumbs", "img")
      modal.children[1].alt = this.alt
    }
    }
  }
modalImg
var closeSpan = document.getElementsByClassName('img-modal-close');
for (i=0; i<closeSpan.length; i++)
  {
    closeSpan[i].onclick = function() {
      modal.style.display = "none";
    }
  }



// Insert email contact in footer on page load (to avoid bots scraping email address)

window.onload = function() {
  document.getElementById("mailing").innerHTML =
    "<a href='mailto:callum_anderson@hotmail.com' target='_blank'>callum_anderson@hotmail.com</a>";
}
