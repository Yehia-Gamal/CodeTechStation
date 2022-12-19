let header = document.querySelector("header");
let landing = document.querySelector(".landing");

// My Props
let headerHeight = header.style.height;
let headerPadding = header.style.padding;

window.onscroll = function () {
  let windowH = window.scrollY;
  let headerH = header.offsetHeight; //height + padding + border
  let landingH = landing.offsetHeight; //height + padding + border

  if (windowH > headerH) {
    header.style.height = "0";
    header.style.padding = "0";
    if (windowH >= landingH) {
      header.style.height = headerHeight;
      header.style.padding = headerPadding;
      header.style.position = "fixed";
      header.style.boxShadow = "0 8px 32px 0 rgb(0 0 0 / 37%)";
      header.style.background = "linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0))"
      header.style.backdropFilter = "blur(5px)"
      header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.18)"
      header.style.zIndex = "999"
      
    } else {
      header.style.position = "relative";
      header.style.boxShadow = "none";
    }
  } else {
    header.style.height = headerHeight;
    header.style.padding = headerPadding;
  }
};
