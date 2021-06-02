const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
}
showMenu('menu-toggler', 'nav-menu')


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')


  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
