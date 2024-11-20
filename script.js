document.addEventListener("DOMContentLoaded", () => {
    const imagesFolder = "images";
    const imageList = [
        "_M4A3996.jpg",
        "_M4A4026.jpg",
        "_M4A4028.jpg",
        "_M4A4037.jpg",
        "_M4A4041.jpg",
        "_M4A4061.jpg"
        // Add more image file names if needed
    ];

    const randomImage = document.getElementById("random-image");
    if (randomImage) {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        randomImage.src = `${imagesFolder}/${imageList[randomIndex]}`;
        randomImage.alt = `Random Portfolio Image ${randomIndex + 1}`;
    }

    // Modal logic for Photography page
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");
    const closeModal = document.getElementById("close-modal");
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.src;
            modalCaption.textContent = item.alt;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// github api
document.addEventListener("DOMContentLoaded", () => {
    const githubUsername = "ramarek"; // Ustaw swoją nazwę użytkownika
    const projectsContainer = document.getElementById("github-projects");

    if (projectsContainer) {
        // Użyj zmiennej `githubUsername` w adresie URL
        fetch(`https://api.github.com/users/${githubUsername}/repos`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                data.forEach(repo => {
                    const projectCard = document.createElement("div");
                    projectCard.className = "project-card";
                    projectCard.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p>${repo.description || "Brak opisu"}</p>
                        <a href="${repo.html_url}" target="_blank">Zobacz projekt</a>
                    `;
                    projectsContainer.appendChild(projectCard);
                });
            })
            .catch(error => console.error("Błąd pobierania projektów:", error));
    }
});
