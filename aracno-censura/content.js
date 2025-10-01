console.log("Extensão Anti-Aranha Ativa!");

const keywords = ["aranha", "spider", "tarantula", "aracnídeo", "arachnid", "salticidae", "thomisidae", "lycosidae", "theraphosidae", "araneae", "araneus diadematus", "phoneutria", "theraphosidae", "atracinae", "latrodectus", "heteropoda", "solifugae", "theraphosa blondi", "theraphosa"];

function censorImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        const srcText = img.src.toLowerCase();

        const shouldCensor = keywords.some(keyword => altText.includes(keyword) || srcText.includes(keyword));

        if (shouldCensor) {
            img.style.filter = "blur(30px)";
            img.style.border = "3px solid red";
        }
    });
}


censorImages();
