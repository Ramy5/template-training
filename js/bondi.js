// start Header 
// active in ul 
let barList = document.querySelectorAll(".barnav li a");
barList.forEach((li) => {
    li.onclick = function (a) {
        for (let i = 0; i < barList.length; i++) {
            barList[i].classList.remove("active");
        }
        a.target.classList.add("active");
    }
})
// start scroll for li bar
let toTop = document.querySelector(".toTop"); // for scroll to top 
window.onscroll = function (e) {
    if (scrollY > 0 && scrollY < 700) {
        toTop.style.display = "none"; // for scroll to top
        for (let h = 0; h < barList.length; h++) {
            barList[h].classList.remove("active");
        }
        barList[0].classList.add("active");
    } else if (scrollY > 700 && scrollY < 1400) {
        toTop.style.display = "block"; // for scroll to top
        for (let s = 0; s < barList.length; s++) {
            barList[s].classList.remove("active");
        }
        barList[1].classList.add("active");
    } else if (scrollY > 1400 && scrollY < 2400) {
        toTop.style.display = "block"; // for scroll to top
        for (let p = 0; p < barList.length; p++) {
            barList[p].classList.remove("active");
        }
        barList[2].classList.add("active");
    } else if (scrollY > 2400 && scrollY < 3200) {
        toTop.style.display = "block"; // for scroll to top
        for (let a = 0; a < barList.length; a++) {
            barList[a].classList.remove("active");
        }
        barList[3].classList.add("active");
    } else if (scrollY > 3200 && scrollY < 4300) {
        toTop.style.display = "block"; // for scroll to top
        for (let c = 0; c < barList.length; c++) {
            barList[c].classList.remove("active");
        }
        barList[4].classList.add("active");
    } else if (scrollY > 4400) {
        toTop.style.display = "block"; // for scroll to top
        for (let o = 0; o < barList.length; o++) {
            barList[o].classList.remove("active");
        }
        barList[5].classList.add("active");
    }
}
// end scroll for li bar
// end Header
// start scroll to top
toTop.addEventListener("click", function (c) {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
})
// end scroll to top
// start portfolio
let liPort = document.querySelectorAll(".liport li");
let imageJs = document.querySelectorAll(".imageJs");
liPort[0].classList.add("active");
liPort.forEach((e) => {
    e.onclick = function (a) {
        for (let port = 0; port < liPort.length; port++) {
            liPort[port].classList.remove("active");
        }
        a.target.classList.add("active");
        if (a.target == liPort[0]) {
            for (let image = 0; image < imageJs.length; image++) {
                imageJs[image].style.display = "block";
            }
        }
        if (a.target == liPort[1]) {
            for (let image = 0; image < imageJs.length; image++) {
                imageJs[image].style.display = "block";
            }
            imageJs[0].style.display = "none";
            imageJs[5].style.display = "none";
            imageJs[3].style.display = "none";
            imageJs[2].style.display = "none";
        }
        if (a.target == liPort[2]) {
            for (let image = 0; image < imageJs.length; image++) {
                imageJs[image].style.display = "block";
            }
            imageJs[1].style.display = "none";
            imageJs[4].style.display = "none";
            imageJs[6].style.display = "none";
            imageJs[7].style.display = "none";
        }
        if (a.target == liPort[3]) {
            for (let image = 0; image < imageJs.length; image++) {
                imageJs[image].style.display = "block";
            }
            imageJs[1].style.display = "none";
            imageJs[4].style.display = "none";
            imageJs[6].style.display = "none";
            imageJs[7].style.display = "none";
            imageJs[0].style.display = "none";
            imageJs[2].style.display = "none";
        }
        if (a.target == liPort[4]) {
            for (let image = 0; image < imageJs.length; image++) {
                imageJs[image].style.display = "block";
            }
            imageJs[1].style.display = "none";
            imageJs[4].style.display = "none";
            imageJs[6].style.display = "none";
            imageJs[7].style.display = "none";
            imageJs[0].style.display = "none";
            imageJs[3].style.display = "none";
            imageJs[2].style.display = "none";
            imageJs[5].style.display = "none";
        }
    }
})

// end portfolio