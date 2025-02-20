document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.movie-rating').style.display = 'block'; // Menampilkan rating
    });
    card.addEventListener('mouseleave', () => {
        card.querySelector('.movie-rating').style.display = 'none'; // Menyembunyikan rating saat mouse keluar
    });
});

function filterMovies() {
    let genre = document.getElementById('genre').value;
    let movies = document.querySelectorAll('.movie-card');

    movies.forEach(movie => {
        if (genre === '' || movie.classList.contains(genre)) {
            movie.style.display = 'block'; // Menampilkan film yang sesuai
        } else {
            movie.style.display = 'none'; // Menyembunyikan film yang tidak sesuai
        }
    });
}
// Mendapatkan modal dan elemen lain
let modal = document.getElementById("movieModal");
let span = document.getElementsByClassName("close")[0];



// Menutup modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const ticketPrice = 50000; // Harga tiket per orang

function updateTotal() {
    let ticketCount = document.getElementById('ticket-count').value;
    let totalPrice = ticketCount * ticketPrice;
    document.getElementById('total-price').textContent = `Rp ${totalPrice.toLocaleString()}`;
}
const audio = new Audio('lagu.mp3');
audio.play();
audio.pause();
audio.volume = 0.5;
