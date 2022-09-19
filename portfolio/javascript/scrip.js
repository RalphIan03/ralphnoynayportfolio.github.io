const hamburger = document.querySelector('.header .navigation .nav-menu .ham');
const Mobilemen = document.querySelector('.header .navigation .nav-menu ul');
const Menu_item = document.querySelectorAll('.header .navigation .nav-menu ul li a');
const header2 = document.querySelector(".header")
const section = document.querySelectorAll("section");
const menu = document.querySelectorAll('.header .navigation .nav-menu ul li a');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    Mobilemen.classList.toggle('active');
})

/*document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    console.log = scroll_position
    if(scroll_position > 250){
        header.style.backgroundColor = "#001219";
    }else{
        header.style.backgroundColor = "transparent";
    }
})*/

window.onscroll = function(){
    var scrolled = window.scrollY
    if (scrolled >= 250){
        header2.classList.add('active')
    }else{
        header2.classList.remove('active')
    }
}

/*window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove("selected");
          document
            .querySelector(".header .navigation .nav-menu ul li a[href*=" + id + "]")
            .classList.add("selected");
        });
      }
    });
  };*/

Menu_item.forEach((item) => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        Mobilemen.classList.toggle('active');
    })
});

window.addEventListener('scroll',()=>{
    let current = '';
    section.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
              link.classList.remove('selected');
              document
                .querySelector(".header .navigation .nav-menu ul li a[href*=" + id + "]")
                .classList.add('selected');
            });
          }
    })
})


