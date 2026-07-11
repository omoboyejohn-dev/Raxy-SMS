// ======================================
// RAXY-SMS MAIN SCRIPT
// ======================================

console.log("✅ Raxy-SMS Loaded Successfully");

// ===========================
// GET NUMBER BUTTON
// ===========================

const getNumberBtn = document.querySelector(".hero button");

if (getNumberBtn) {

    getNumberBtn.addEventListener("click", () => {

        window.location.href = "register.html";

    });

}

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================
// FUTURE FUNCTIONS
// ======================================

// Firebase Authentication
// Wallet
// Buy USA Numbers
// Orders
// Dashboard
// TextVerified API
