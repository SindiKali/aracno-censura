console.log("Extensão Anti-Aranha Ativa!");

const keywords = ["aranha", "spider", "tarantula", "aracnídeo", "arachnid"];

function censorImages() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        const altText = img.alt.toLowerCase();
        const srcText = img.src.toLowerCase();

        const shouldCensor = keywords.some(keyword => altText.includes(keyword) || srcText.includes(keyword));

        if (shouldCensor) {
            console.log("Aranha encontrada! Censurando imagem:", img.src);
            img.style.filter = "blur(30px)";
            img.style.border = "3px solid red";
        }
    });
}

censorImages();