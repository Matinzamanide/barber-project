document.addEventListener("DOMContentLoaded", () => {
  const mainHeader = document.getElementById("main-header");
  const sidebarNav = document.getElementById("sidebar-nav");
  const menuHamburgerBtn = document.getElementById("menu-hamburger-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  const articleModal = document.getElementById("article-modal");
  const openArticleModalBtn = document.getElementById("open-article-modal-btn");
  const closeArticleModalBtn = document.getElementById("close-article-modal");
  const editModal = document.getElementById("edit-modal");
  const closeEditModalBtn = document.getElementById("close-modal");
  const articlesContainer = document.getElementById("articles-container");
  const modalWriterInput = document.getElementById("modal-writer");
  const modalTitleInput = document.getElementById("modal-title");
  const modalImageInput = document.getElementById("modal-image");
  const modalSummaryInput = document.getElementById("modal-summary");

  const disableScroll = () => document.body.classList.add("overflow-hidden");
  const enableScroll = () => document.body.classList.remove("overflow-hidden");

  const openModal = (modal) => {
    modal.classList.remove("hidden");
    if (mainHeader) mainHeader.classList.add("hidden");
    disableScroll();
  };

  const closeModal = (modal) => {
    modal.classList.add("hidden");
    if (mainHeader) mainHeader.classList.remove("hidden");
    enableScroll();
  };

  //  مدیریت منوی همبرگری
  menuHamburgerBtn.addEventListener("click", () => {
    sidebarNav.classList.remove("hidden");
    sidebarNav.classList.add("flex");
    disableScroll();
  });

  menuCloseBtn.addEventListener("click", () => {
    sidebarNav.classList.add("hidden");
    sidebarNav.classList.remove("flex");
    enableScroll();
  });

  // مدیریت مدال افزودن مقاله
  if (openArticleModalBtn) {
    openArticleModalBtn.addEventListener("click", () =>
      openModal(articleModal),
    );
  }

  if (closeArticleModalBtn) {
    closeArticleModalBtn.addEventListener("click", () =>
      closeModal(articleModal),
    );
  }

  // مدیریت دکمه ویرایش در کارت‌ها 
  if (articlesContainer) {
    articlesContainer.addEventListener("click", (e) => {
      const editBtn = e.target.closest("button");

      if (editBtn && editBtn.textContent.trim() === "ویرایش") {
        const card =
          editBtn.closest("section") || editBtn.closest(".article-card");

        if (card) {
          const titleFromCard =
            card.querySelector("h2")?.textContent.trim() || "";
          const writerFromCard =
            card.querySelector(".author-name")?.textContent.trim() || "";
          const summaryFromCard =
            card.querySelector("p")?.textContent.trim() || "";

          if (modalTitleInput) modalTitleInput.value = titleFromCard;
          if (modalWriterInput) modalWriterInput.value = writerFromCard;
          if (modalSummaryInput) modalSummaryInput.value = summaryFromCard;

          if (modalImageInput) modalImageInput.value = "";
          openModal(editModal);
        }
      }
    });
  }

  // بستن مدال ویرایش با دکمه انصراف
  if (closeEditModalBtn) {
    closeEditModalBtn.addEventListener("click", () => closeModal(editModal));
  }
});
