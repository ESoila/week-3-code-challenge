document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.getElementById("films");
    const movieDetails = document.getElementById("movie-details");

    //.fetching the movie data from the end point.
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(films => {
            filmsList.innerHTML = '';  
            films.forEach(film => {
        
                const li = document.createElement("li");
                li.textContent = film.title;
                li.className = "list-group-item film item";
                li.addEventListener("click", () => showMovieDetails(film));
                filmsList.appendChild(li);
            });

            // Display the first movie by default
            if (films.length > 0) {
                showMovieDetails(films[0]);
            }
        });
});
function showMovieDetails(film) {
    document.getElementById("poster").src = film.poster;
    document.getElementById("title").textContent = film.title;
    document.getElementById("runtime").textContent = film.runtime;
    document.getElementById("showtime").textContent = film.showtime;
    const availableTickets = film.capacity - film.tickets_sold;
    document.getElementById("available-tickets").textContent = availableTickets > 0 ? availableTickets : "Sold Out";
    document.getElementById("movie-details").style.display = "block";

    //. Activate buy button.
    const buyButton = document.getElementById("buy-ticket");
    if (availableTickets > 0) {
        buyButton.disabled = false;
        buyButton.onclick = () => buyTicket(film);
    } else {
        buyButton.disabled = true;
    }
}

function buyTicket(film){

    const availableTickets = film.capacity - film.tickets_sold;

    //.conditonal check for decremental ticketing.
    if (availableTickets > 0) {
        film.tickets_sold += 1;
         
        const newAvailableTickets = film.capacity - film.ticket_sold;
        document.getElementById("available-tickets").textContent = newAvailableTickets > 0 ? newAvailableTickets : "Tickets Sold Out";

        if (newAvailableTickets === 0) {
            document.getElementById("buy-ticket").disabled = true;
        }
    }
}
function showSection(sectionId) {
    //.Render the menu sections.
    const sections = document.querySelectorAll("section, #movie-details");
    sections.forEach(section => section.style.display = "none");
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = "block";
    }
}