function toggleTheme() {
    const body = document.body;
    const themeButtons = document.querySelectorAll(".themeToggle");

    if (body.classList.contains("light_mode")) {
        body.classList.remove("light_mode");
        localStorage.setItem("theme", "dark");
        themeButtons.forEach(btn => {
            const icon = btn.querySelector("i");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        });
    } else {
        body.classList.add("light_mode");
        localStorage.setItem("theme", "light");
        themeButtons.forEach(btn => {
            const icon = btn.querySelector("i");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll(".themeToggle");
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light_mode");
        themeButtons.forEach(btn => {
            const icon = btn.querySelector("i");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        });
    }
});
