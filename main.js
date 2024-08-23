/*=============== SHOW SIDEBAR ===============*/


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetSelector = tab.dataset.target;
        const target = document.querySelector(targetSelector);

        // Check if the target exists
        if (target) {
            // Remove 'skills_active' from all content elements
            tabContent.forEach(content => content.classList.remove('skills_active'));
            
            // Add 'skills_active' to the target content element
            target.classList.add('skills_active');
        }

        // Remove 'skills_active' from all tabs
        tabs.forEach(t => t.classList.remove("skills_active"));
        
        // Add 'skills_active' to the clicked tab
        tab.classList.add('skills_active');
    });
});


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Link Active Work =====*/


/*===== Work Popup =====*/


/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/