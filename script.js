
const startDate = new Date("2025-05-01T11:30:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const years = now.getFullYear() - startDate.getFullYear();
    const months = now.getMonth() - startDate.getMonth() + (years * 12);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerText =
        `${Math.floor(months / 12)} anos, ${months % 12} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos de amor`;
}

setInterval(updateTimer, 1000);
updateTimer();

let current = 0;
const images = document.querySelectorAll(".carousel-image");
setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}, 3000);
