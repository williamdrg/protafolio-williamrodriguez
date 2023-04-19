const hiddenElement = document.querySelectorAll(".hidden");
const links = document.querySelectorAll(".link");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            links.forEach((link) => { 
                const href = link.getAttribute("href").split("#")[1];
                const id = entry.target.id;
                if (href === id) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            })
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.5,
});
hiddenElement.forEach(element => observer.observe(element))  

/* Menu show */
const iconShow = document.querySelector(".iconMenu");
const navbarMenu = document.querySelector(".navbar__menu");

iconShow.addEventListener('click', () => {
    if (navbarMenu.classList.toggle('navbar__menu__show')) {
        iconShow.classList.add('bx-x')
    } else {
        iconShow.classList.remove('bx-x')
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu.classList.toggle('navbar__menu__show')) {
            iconShow.classList.add('bx-x')
        } else {
            iconShow.classList.remove('bx-x')
        }
    })
} )

//darktheme

const iconTheme = document.querySelector(".iconTheme");

iconTheme.addEventListener('click', () => {
    if (document.body.classList.toggle("darkTheme")) {
        iconTheme.textContent = "🌙"
    } else {
        iconTheme.textContent = "☀️"
    }
})
