

// SideNav
document.querySelector('.nav-toggler').addEventListener('click', openNav)

document.querySelector('#main').addEventListener('click', closeNav)

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  
  }
  