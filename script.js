// =======================
// RAXY-SMS MAIN SCRIPT
// =======================

console.log("Raxy-SMS website loaded");


// Button action

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        if(this.innerText === "Get Number Now"){

            window.location.href = "register.html";

        }

    });

});
