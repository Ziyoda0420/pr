document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".index");
    const eyeIcon = document.querySelector(".eye-icon");
    const button = document.querySelector(".button");

    eyeIcon.addEventListener("click", function () {
        if (inputField.type === "password") {
            inputField.type = "text";
            eyeIcon.src = "visibility_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png"; // Ochilgan ko‘z rasmi
        } else {
            inputField.type = "password";
            eyeIcon.src = "eye.png"; // Yopilgan ko‘z rasmi
        }
    });

    inputField.addEventListener("input", function () {
        if (inputField.value.trim() !== "") {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});

