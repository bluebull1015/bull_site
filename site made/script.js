// 포트폴리오 프로젝트 데이터를 저장
const portfolioProjects = [
    {
        title: "Project 1",
        description: "A brief description of Project 1. Highlight the skills and technologies used.",
        image: "https://via.placeholder.com/100"
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2. Highlight the skills and technologies used.",
        image: "https://via.placeholder.com/100"
    },
    {
        title: "Project 3",
        description: "A brief description of Project 3. Highlight the skills and technologies used.",
        image: "https://via.placeholder.com/100"
    }
];

// 포트폴리오 섹션에 프로젝트를 동적으로 추가
function loadPortfolio() {
    const portfolioContainer = document.querySelector(".portfolio .container");

    portfolioProjects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("portfolio-item");

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        portfolioContainer.appendChild(projectItem);
    });
}

// 스크롤 시 네비게이션 메뉴 강조
function highlightNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// Contact Me 폼 데이터 확인 (추가 가능)
function setupContactForm() {
    const emailLink = document.querySelector(".contact a");
    emailLink.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Email client will open. Make sure your email app is configured!");
    });
}

// 페이지가 로드되었을 때 실행할 함수
document.addEventListener("DOMContentLoaded", () => {
    loadPortfolio();
    highlightNav();
    setupContactForm();
});
