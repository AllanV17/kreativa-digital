document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       THEME
    ========================== */

    const themeToggle = document.querySelector(".theme-control");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        html.setAttribute("data-bs-theme", savedTheme);
    }
    /* Switch Logo */
function updateLogo(theme) {

    const navbarLogo = document.getElementById("themeLogo");
    const footerLogo = document.getElementById("themeFooterLogo");

    const logoPath =
        theme === "dark"
            ? "assets/img/logo/logo-dark.png"
            : "assets/img/logo/logo.png";

    if (navbarLogo) {
        navbarLogo.src = logoPath;
    }

    if (footerLogo) {
        footerLogo.src = logoPath;
    }

}
    function updateThemeIcon(theme) {

        if (!themeToggle) return;

        const icon = themeToggle.querySelector("i");

        if (!icon) return;

        if (theme === "dark") {
            icon.className = "bi bi-sun";
        } else {
            icon.className = "bi bi-moon-stars";
        }

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const currentTheme =
                html.getAttribute("data-bs-theme");

            const newTheme =
                currentTheme === "dark" ? "light" : "dark";

            html.setAttribute("data-bs-theme", newTheme);

            localStorage.setItem("theme", newTheme);

            updateThemeIcon(newTheme);
            updateLogo(newTheme);
        });

    }

    updateThemeIcon(
        html.getAttribute("data-bs-theme") || "light"
    );
    updateLogo(
    html.getAttribute("data-bs-theme")     || "light"
);

    /* ==========================
       SETTINGS PANEL
    ========================== */

    const settingsToggle =
        document.querySelector(".settings-toggle");

    const settingsPanel =
        document.querySelector("#settingsPanel");

    const settingsOverlay =
        document.querySelector("#settingsOverlay");

    const settingsClose =
        document.querySelector(".settings-close");


    /* Abrir panel */

    if (settingsToggle && settingsPanel && settingsOverlay) {

        settingsToggle.addEventListener("click", () => {

            settingsPanel.classList.add("active");
            settingsOverlay.classList.add("active");

            settingsToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            settingsPanel.setAttribute(
                "aria-hidden",
                "false"
            );

        });

    }


    /* Cerrar panel */

    function closeSettingsPanel() {

        if (
            settingsPanel &&
            settingsOverlay &&
            settingsToggle
        ) {

            settingsPanel.classList.remove("active");
            settingsOverlay.classList.remove("active");

            settingsToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            settingsPanel.setAttribute(
                "aria-hidden",
                "true"
            );

        }

    }


    /* Cerrar con X */

    if (settingsClose) {

        settingsClose.addEventListener(
            "click",
            closeSettingsPanel
        );

    }


    /* Cerrar al tocar fuera */

    if (settingsOverlay) {

        settingsOverlay.addEventListener(
            "click",
            closeSettingsPanel
        );

    }


    /* Cerrar con Escape */

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            settingsPanel &&
            settingsPanel.classList.contains("active")
        ) {

            closeSettingsPanel();

        }

    });

});

