// Insert email contact in footer on page load (to avoid bots scraping email address)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#mailing").innerHTML =
    "<a href='mailto:callum_anderson@hotmail.com' target='_blank'>callum_anderson@hotmail.com</a>";
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function blogDropDown() {
    document.querySelector("#myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.querySelector("#myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

//Image modal
document.addEventListener('DOMContentLoaded', () => {
const modal = document.querySelector('#img-modal');
const modalImg = document.querySelectorAll('.blog-img');

for (i=0; i<modalImg.length; i++)
  {
    modalImg[i].onclick = function(){
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width > 767) {
        modal.style.display = "block";
        modal.style.visibility = "visible";
        modal.children[1].src = this.src.replace("thumbs", "img");
        modal.children[1].alt = this.alt;
      }
    }
  };

const closeSpan = document.querySelectorAll('.img-modal-close');
for (i=0; i<closeSpan.length; i++)
  {
    closeSpan[i].onclick = function() {
      const imgModal = this.parentNode;
      imgModal.style.display = "none";
    };
  }
});

//Blog sections accordian
document.addEventListener('DOMContentLoaded', () => {
  const collapser = document.querySelectorAll('.blog-post')
  for (i=0; i<collapser.length; i++)
    {
      collapser[i].onclick = function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
          panel.style.maxHeight = 0;
          panel.style.display = "none";
          this.children[1].innerHTML = '+';
        } else {
          panel.style.display = "block";
          panel.style.maxHeight = '2000px';
          this.children[1].innerHTML = '-';
        }
      }
    }
});
