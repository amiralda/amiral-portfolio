const toogleButton = document.getElementsByClassName("toogle-button")[0];
const overLay = document.getElementsByClassName("overlay")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

// eslint-disable-next-line no-unused-vars

function click() {
  overLay.classList.toggle("active");
  navbarLinks.classList.toggle("active");
}

toogleButton.addEventListener("click", () => {
  overLay.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  document.body.classList.toggle("fixed-screen");
});

const closeValue = () => {
  navbarLinks.classList.remove("active");
  document.body.classList.remove("fixed-screen");
  overLay.classList.remove("active");
};

const item = (i, content, link) => {
  let x = `a${i}`;
  x = document.createElement("a");
  x.setAttribute("href", `#${link}`);
  x.textContent = content;
  x.addEventListener("click", () => {
    closeValue();
  });

  return x;
};

const ul = document.createElement("ul");
const li0 = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");

li0.appendChild(item(0, "Portfolio", "work-preview"));
li1.appendChild(item(1, "About", "about"));
li2.appendChild(item(2, "Contact", "contact"));
ul.appendChild(li0);
ul.appendChild(li1);
ul.appendChild(li2);
overLay.innerHTML = "";
overLay.appendChild(ul);
const cls = document.createElement("img");
cls.classList.add("closeMenu");
cls.setAttribute("src", "img/close.svg");
cls.setAttribute("alt", "close");
cls.addEventListener("click", () => {
  closeValue();
});

overLay.appendChild(cls);
