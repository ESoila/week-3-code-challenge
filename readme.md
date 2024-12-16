# Flatdango Movie Ticket Booking App
This project is a simple Movie Ticket Booking application built using HTML, CSS, and JavaScript. The app fetches data from a local server, displays available movies, and allows users to view movie details and purchase tickets.

## Features
List of Available Movies: Displays a list of movies fetched from a local server.

-  Movie Details: Shows detailed information about a selected movie, including its title, runtime, showtime, available tickets, and poster.

-  Buy Tickets: Allows users to purchase tickets for a movie if tickets are available.

-  Dynamic UI: Automatically updates the available tickets and disables the "Buy Ticket" button when tickets are sold out.

```
Project Structure
Movie-Ticket-Booking-App
|-- index.html    # Main HTML file
|-- style.css     # Stylesheet for the app
|-- index.js      # JavaScript file for app functionality

```

## How It Works
Fetch Movies:
The app fetches a list of movies from a local server at `http://localhost:3000/films` and displays them in a sidebar. Each movie is represented as a list item.

## Show Movie Details

- Clicking on a movie in the list displays its details in the main section, including:
```bash
 - Movie title

- Runtime

- Showtime

- Available tickets

- Poster
```
## Buy Tickets
Users can purchase tickets using the `"Buy Ticket"` button. The number of available tickets updates dynamically. If tickets are sold out, the button is disabled and a `"Sold Out"` message is displayed.

## Setup and Installation
Prerequisites
 - Node.js and npm: Ensure you have Node.js and npm installed on your system.

 - JSON Server: Use JSON Server to simulate a backend server.

Steps
Clone this repository:
```bash
git clone <repository-url>
```
Navigate to the project directory:

```bash
cd Movie-Ticket-Booking-App
```

Install JSON Server:
```bash
npm install -g json-server
```
Start the server:

```bash
json-server --watch db.json --port 3000
```
Replace db.json with your JSON file containing the movie data.

Open index.html in your browser to view the app.

Movie Data Format
- The app expects the following JSON structure for movies:
```json
[
  {
    "id": 1,
    "title": "Movie Title",
    "runtime": 120,
    "showtime": "7:00 PM",
    "capacity": 100,
    "tickets_sold": 50,
    "poster": "https://example.com/poster.jpg"
  },
  {
    "id": 2,
    "title": "Another Movie",
    "runtime": 90,
    "showtime": "8:30 PM",
    "capacity": 80,
    "tickets_sold": 80,
    "poster": "https://example.com/another-poster.jpg"
  }
]
```
## Code Breakdown
- index.js
Fetching Movies: Retrieves the list of movies from the server and populates the sidebar.

Display Movie Details: Updates the main section with the selected movie's information.

Buy Tickets: Handles ticket purchase logic and updates the UI dynamically.

- style.css
Used for styling the layout, buttons, and overall appearance of the app.

- index.html
The main HTML structure for the app, including the sidebar, movie details section, and navigation.

## How to Use
- Start the JSON server.

- Open index.html in your browser.

- Select a movie from the "Now Showing" list.

## View details about the movie.

- Click "Buy Ticket" to purchase a ticket (if available).

## Troubleshooting
- No Movies Displayed: Ensure the JSON server is running and accessible at `http://localhost:3000/films`.

