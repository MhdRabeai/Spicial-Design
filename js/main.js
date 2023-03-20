/////////////////////////////// Toggole spain /////////////////////
let ico = document.querySelector(".fa-gear");
let sitting = document.querySelector(".sitting-box");
ico.addEventListener("click", () => {
  sitting.classList.toggle("open");
  ico.classList.toggle("fa-spin");
});
///////////////// Switch Colors & Local Storage///////////////////////

const colorsli = document.querySelectorAll(".colors-list li");
if (window.localStorage.getItem("color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color")
  );
  colorsli.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color === window.localStorage.getItem("color")) {
      ele.classList.add("active");
    }
  });
}
colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    window.localStorage.setItem("color", e.target.dataset.color);
    active(e);
  });
});
const rand = document.querySelectorAll(".option-box span");
let rando = true;

let control;
if (window.localStorage.getItem("background") !== null) {
  if (window.localStorage.getItem("background") === "yes") {
    rando = true;
  } else {
    rando = false;
  }
  rand.forEach((el) => {
    el.classList.remove("active");
  });
  if (window.localStorage.getItem("background") === "yes") {
    document.querySelector(".option-box .yes").classList.add("active");
  } else {
    document.querySelector(".option-box .yes").classList.add("active");
  }
}

/////////////////////////// Random Images /////////////////////////////////
rand.forEach((sp) => {
  sp.addEventListener("click", (e) => {
    active(e);
    if (e.target.dataset.back === "yes") {
      rando = true;
      randomimg();
      window.localStorage.setItem("background", "yes");
    } else {
      rando = false;
      clearInterval(control);
      window.localStorage.setItem("background", "no");
    }
  });
});
//

function randomimg() {
  if (rando === true) {
    let landing = document.querySelector(".landing");
    let lanimg = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
    control = setInterval(() => {
      let rand = Math.floor(Math.random() * lanimg.length);
      landing.style.backgroundImage = `url("./images/${rand}.jpg")`;
    }, 1000);
  }
}
randomimg();
// *******************
// skills selector
let skills = document.querySelector(".skills");
window.onscroll = function () {
  let offsettop = skills.offsetTop - 10;
  let offsethe = skills.offsetHeight;
  let windowhe = this.innerHeight;
  windowtop = this.pageYOffset;

  if (windowtop > offsettop + offsethe - windowhe) {
    let allskills = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    );
    allskills.forEach((span) => {
      span.style.width = span.dataset.pro;
    });
  }
};
///////////////////////// Gallery ///////////////////////////////
let images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    let div = document.createElement("div");
    div.className = "one-div";
    document.body.appendChild(div);
    //
    let di = document.createElement("div");
    di.className = "two-div";
    if (img.alt !== null) {
      let imgheading = document.createElement("h3");
      imgheading.innerHTML = img.alt;
      di.appendChild(imgheading);
    }
    let span = document.createElement("span");
    span.innerHTML = "X";
    di.appendChild(span);
    let popup = document.createElement("img");
    popup.src = img.src;
    di.appendChild(popup);
    document.body.appendChild(di);
    span.addEventListener("click", () => {
      div.remove();
      di.remove();
      span.remove();
    });
  });
});
/////////////////////////////////////////////////////////
const allbullets = document.querySelectorAll(".nav-bullets .bullet");
const alllinks = document.querySelectorAll(".landing .header .links a");
function scroll(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scroll(allbullets);
scroll(alllinks);
//////////////////////////////////////
let links = document.querySelectorAll(".landing .header .links a");
links.forEach((lin) => {
  lin.classList.remove("active");
});
//////////// function to remove and add active

function active(eve) {
  eve.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  eve.target.classList.add("active");
}

////////////////////////
let navbullets = document.querySelector(".nav-bullets");
let testing = document.querySelectorAll(".testing-option span");
if (window.localStorage.getItem("bullets") === "none") {
  navbullets.style.display = "none";
  document.querySelector(".testing-option .no").classList.add("active");
} else {
  navbullets.style.display = "block";
  document.querySelector(".testing-option .yes").classList.add("active");
}
testing.forEach((span) => {
  span.addEventListener("click", (ele) => {
    if (ele.target.dataset.back === "no") {
      navbullets.style.display = "none";
      window.localStorage.setItem("bullets", "none");
    } else {
      navbullets.style.display = "block";
      window.localStorage.setItem("bullets", "block");
    }
    active(ele);
  });
});
////////////////////////////////////////////////
document.querySelector(".sitting-box .containe .reset-option").onclick =
  function () {
    window.localStorage.clear();
    window.location.reload();
  };
/////////////////////////////
let linkss = document.querySelector(".landing .container .header .links");
let toggl = document.querySelector(".landing .header .toggle");
toggl.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  linkss.classList.toggle("open");
};
linkss.onclick = function (e) {
  e.stopPropagation();
};
//
