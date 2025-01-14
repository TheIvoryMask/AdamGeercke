

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.add("hidden")
        }
    })
});

const home = document.getElementById("homeButton")
const resume = document.getElementById("resumeButton")
const homeSection = document.getElementById("scroll")
const resumeSection = document.getElementById("resume")


homeButton.addEventListener("click", () => {
    homeSection.style.display = "block";
    resumeSection.style.display = "none";
});

resumeButton.addEventListener('click', () => {
    homeSection.style.display = 'none';
    resumeSection.style.display = 'block';
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

