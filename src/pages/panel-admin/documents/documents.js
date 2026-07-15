const documentsContainer = document.getElementById("documents-container");
const menuHamburgerBtn = document.getElementById("menu-hamburger-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const sidebarNav = document.getElementById("sidebar-nav");
const addDocumentBtn = document.querySelector("header button");
const documentModal = document.getElementById("document-modal");
const closeDocumentModalBtn = document.getElementById("close-document-modal");

// حذف کارت
documentsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});

// بازشدن sidebar
menuHamburgerBtn.addEventListener("click", function () {
  sidebarNav.classList.remove("hidden");
  menuHamburgerBtn.classList.add("hidden");
});

// بستن sidebar
menuCloseBtn.addEventListener("click", function () {
  sidebarNav.classList.add("hidden");
  menuHamburgerBtn.classList.remove("hidden");
});

// باز شدن مدال
addDocumentBtn.addEventListener("click", function () {
  documentModal.classList.remove("hidden");
});

// بستن مدال
closeDocumentModalBtn.addEventListener("click", function () {
  documentModal.classList.add("hidden");
});
