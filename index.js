

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
const about = document.getElementById("aboutButton")
const resume = document.getElementById("resumeButton")
const scrollSection = document.getElementById("scroll")
const resumeSection = document.getElementById("resume")
const homeSection = document.getElementById("fixed")





about.addEventListener ("click", () => {
    scrollSection.classList.add("fade-in");

    setTimeout(() => {
      scrollSection.style.opacity = "1";
      scrollSection.style.filter = "blur(0)";
    }, 300);
    scrollSection.style.flexBasis = "60%";
    homeSection.style.flexBasis = "40%";
    if (resumeSection.style.display !== "none"){
        resumeSection.classList.remove('fade-in');
        resumeSection.style.opacity  = "0";
    }
    about.style.borderBottom = '4px solid rgba(84, 85, 173, 0.75)';
    home.style.borderBottom = 'none';
    resume.style.borderBottom = 'none';

});

resume.addEventListener ("click", () => {
    resumeSection.classList.add("fade-in");
    homeSection.style.flexDirection = 'column';
    setTimeout(() => {
        resumeSection.style.opacity = "1";
        resumeSection.style.filter = "blur(0)";
    }, 300);
    resumeSection.style.flexBasis = "60%";
    homeSection.style.flexBasis = "40%";

    if (scrollSection.style.display !== 'none'){
        scrollSection.classList.remove("fade-in");
        scrollSection.style.opacity = '0'; 
    };
    
    homeSection.style.flexDirection = 'column';

    about.style.borderBottom = 'none';
    home.style.borderBottom = 'none';
    resume.style.borderBottom = '4px solid rgba(84, 85, 173, 0.75)';
})


home.addEventListener ("click", () => {

    scrollSection.style.opacity = '0';
    resumeSection.style.opacity = '0';

    setTimeout(() =>{
        homeSection.style.flexBasis = "100%";
        resumeSection.style.flex = 0;
        scrollSection.style.flex = 0;
}, 300);
about.style.borderBottom = 'none';
home.style.borderBottom = '4px solid rgba(84, 85, 173, 0.75)';
resume.style.borderBottom = 'none';

})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

