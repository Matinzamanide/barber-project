document.addEventListener("DOMContentLoaded", () => {
  const menuHamburgerBtn = document.getElementById("menu-hamburger-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const sidebarNav = document.getElementById("sidebar-nav");
  const portfoliosContainer = document.getElementById("portfolio-container");
  const openModalBtn = document.getElementById("open-portfolio-modal");
  const closeModalBtn = document.getElementById("close-portfolio-modal");
  const portfolioModal = document.getElementById("portfolio-modal");
  const savePortfolioBtn = document.getElementById("save-portfolio-btn");

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

  if (portfoliosContainer) {
    portfoliosContainer.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".delete-btn");
      if (deleteBtn) {
        const card = deleteBtn.closest(".group");
        if (card) card.remove();
      }
    });
  }

  // --- مدیریت باز و بسته شدن مودال ---
  if (openModalBtn && portfolioModal) {
    openModalBtn.addEventListener("click", () => {
      portfolioModal.classList.remove("hidden");
    });
  }

  const hideModal = () => {
    if (portfolioModal) portfolioModal.classList.add("hidden");
    const inputs = portfolioModal.querySelectorAll("input[type='file']");
    inputs.forEach((input) => (input.value = ""));
  };

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", hideModal);
  }

  if (portfolioModal) {
    portfolioModal.addEventListener("click", (e) => {
      if (e.target === portfolioModal) {
        hideModal();
      }
    });
  }
  // بستن مدال
  if (savePortfolioBtn) {
    savePortfolioBtn.addEventListener("click", () => {
      hideModal();
    });
  }
});
