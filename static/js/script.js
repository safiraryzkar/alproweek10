document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".section-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var target = this.getAttribute("data-target");

            hideAllSections();

            // Periksa apakah yang di-klik adalah skills dan apakah section skills sudah ditampilkan
            if (target !== "skills" || !document.getElementById("skills").style.display || document.getElementById("skills").style.display === "none") {
                document.getElementById(target).style.display = "block";
            }
        });
    });

    function hideAllSections() {
        var sections = document.querySelectorAll(".section");
        sections.forEach(function (section) {
            section.style.display = "none";
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('mousedown', function (event) {
        event.preventDefault(); // Prevents the default behavior (e.g., double-click to select text)
        scrollToSection('profile-image');
    });

    document.getElementById('skills').addEventListener('mousedown', function (event) {
        event.preventDefault();
        scrollToSection('section');
    });

    document.getElementById('about').addEventListener('mousedown', function (event) {
        event.preventDefault();
        scrollToSection('about-me');
    });

    document.getElementById('projects').addEventListener('mousedown', function (event) {
        event.preventDefault();
        scrollToSection('projects');
    });

    document.getElementById('contact').addEventListener('mousedown', function (event) {
        event.preventDefault();
        scrollToSection('logo-container');
    });

    function scrollToSection(sectionId) {
        const section = document.getElementsByClassName(sectionId)[0];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function() {
        window.location.href = "/"; 
    });
});
