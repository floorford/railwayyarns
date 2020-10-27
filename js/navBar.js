function toggleNavbar() {
  let mobileNav = document.getElementById("mobileNav");
  if (mobileNav.getBoundingClientRect().height === 0) {
    return slideDown(mobileNav);
  }
  mobileNav.style.height = 0;
}

const slideDown = (element) =>
  (element.style.height = `${element.scrollHeight}px`);
