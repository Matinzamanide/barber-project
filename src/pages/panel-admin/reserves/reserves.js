document.addEventListener("DOMContentLoaded", () => {
  const menuHamburgerBtn = document.getElementById("menu-hamburger-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const sidebarNav = document.getElementById("sidebar-nav");
  const mainHeader = document.getElementById("main-header");

    // باز کردن sidebar
  const openMenu = () => {
    if (sidebarNav) {
      sidebarNav.classList.remove("hidden");
    }
  };

  //  sidebar بستن
  const closeMenu = () => {
    if (sidebarNav) {
      sidebarNav.classList.add("hidden");
    }
  };

    // باز کردن sidebar
  if (menuHamburgerBtn) {
    menuHamburgerBtn.addEventListener("click", openMenu);
  }
  //  sidebar بستن
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", closeMenu);
  }
});
