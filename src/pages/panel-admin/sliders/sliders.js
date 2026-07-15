document.addEventListener("DOMContentLoaded", () => {
  // ۱. تعریف متغیرها
  const menuHamburgerBtn = document.getElementById("menu-hamburger-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const sidebarNav = document.getElementById("sidebar-nav");
  const sliderModal = document.getElementById("slider-modal");
  const addSliderBtn = document.querySelector("header button");
  const closeSliderModalBtn = document.getElementById("close-slider-modal");
  const saveSliderBtn = document.getElementById("save-slider-btn");
  const slidersContainer = document.getElementById("sliders-container");

  // باز کردن sidebar
  const openMenu = () => {
    if (sidebarNav) {
      sidebarNav.classList.remove("hidden");
    }
  };
  // بستن sidebar 
  const closeMenu = () => {
    if (sidebarNav) {
      sidebarNav.classList.add("hidden");
    }
  };

  // باز کردن مدال
  const openModal = () => {
    if (sliderModal) {
      sliderModal.classList.remove("hidden");
    }
  };

  // بستن  مدال
  const closeModal = () => {
    if (sliderModal) {
      sliderModal.classList.add("hidden");
    }
  };

  if (menuHamburgerBtn) {
    menuHamburgerBtn.addEventListener("click", openMenu);
  }

  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", closeMenu);
  }

  if (addSliderBtn) {
    addSliderBtn.addEventListener("click", openModal);
  }

  if (closeSliderModalBtn) {
    closeSliderModalBtn.addEventListener("click", closeModal);
  }

  if (saveSliderBtn) {
    saveSliderBtn.addEventListener("click", () => {
      closeModal();
    });
  }

  //  مدیریت حذف کارت‌ها
  if (slidersContainer) {
    slidersContainer.addEventListener("click", (event) => {
      const deleteBtn = event.target.closest(".delete-btn");

      if (deleteBtn) {
        const card = deleteBtn.closest(".group") || deleteBtn.parentElement;
        card.remove();
      }
    });
  }
});
