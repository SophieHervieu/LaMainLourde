/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const btn = document.getElementsByClassName(".dropbtn");
btn.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
  
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 
console.log(!event.target.matches('.dropbtn'));
}

)
const btn1 = document.getElementsByClassName(".dropbtn1");
btn.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn1')) {
  
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
})