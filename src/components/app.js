   // ==========================================
        // ۱. مدیریت منوی همبرگری و اورلی موبایل
        // ==========================================
        const menuToggle = document.getElementById('menuToggle');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const mobileLinks = document.querySelectorAll('#mobileMenu a, #mobileMenu button'); // انتخاب تمام لینک‌ها و دکمه‌های داخل منو
        let isMenuOpen = false;

        function openMenu() {
            if (!mobileMenu || !menuOverlay) return;
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('menu-open');
            menuOverlay.classList.remove('opacity-0', 'pointer-events-none');
            menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
            isMenuOpen = true;
        }

        function closeMenuFunc() {
            if (!mobileMenu || !menuOverlay) return;
            mobileMenu.classList.add('translate-x-full');
            mobileMenu.classList.remove('menu-open');
            menuOverlay.classList.add('opacity-0', 'pointer-events-none');
            menuOverlay.classList.add('opacity-100', 'pointer-events-auto'); // اصلاح کلاس منطقی اورلی
            menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
            isMenuOpen = false;
        }

        // شنونده‌های رویداد کلیک برای منو
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                if (!isMenuOpen) openMenu(); else closeMenuFunc();
            });
        }

        if (closeMenu) closeMenu.addEventListener('click', closeMenuFunc);
        if (menuOverlay) menuOverlay.addEventListener('click', closeMenuFunc);

        // بستن منو در صورت کلیک روی لینک‌های داخل منو (مهم برای رفتن به بخش‌های مختلف صفحه)
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenuFunc);
        });

        // بستن منو با کلید Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenuFunc();
            }
        });

        // ==========================================
        // ۲. تغییر افکت هدر هنگام اسکرول
        // ==========================================
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (!header) return;
            
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
                header.classList.remove('shadow-sm');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.add('shadow-sm');
            }
        });

        // ==========================================
        // ۳. راه‌اندازی و تنظیمات اسلایدر Swiper (نظرات)
        // ==========================================
        document.addEventListener('DOMContentLoaded', function () {
            // مطمئن می‌شویم المان اسلایدر در صفحه وجود دارد تا خطا ندهد
            if (document.querySelector('.testimonial-slider')) {
                const swiper = new Swiper('.testimonial-slider', {
                    rtl: true, // سازگاری کامل با جهت راست‌چین فارسی
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                    loop: true,
                    
                    // سیستم ریسپانسیو (Breakpoints)
                    breakpoints: {
                        768: { // تبلت
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: { // دسکتاپ (نمایش ۳ تایی و حرکت ۳ تایی)
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        }
                    },
                    
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    },
                    
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    
                    grabCursor: true,
                });
            }
        });