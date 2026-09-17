# CineScope

Hey there! Welcome to **CineScope** — a fun little project I built to help people find and explore their favorite TV shows and movies. You can search for shows, check out their ratings, see when they premiered, and read a quick summary of what they're about. 

**Live Demo:** [https://cine-scope-bice-six.vercel.app](https://cine-scope-bice-six.vercel.app)

### What you can do here:
- **Browse:** See a list of the most recently added or popular TV shows right on the home page.
- **Search:** Looking for something specific? Just type the name in the search bar and get instant results.
- **View Details:** Click on any movie card to open up a modal that shows you the full poster, rating, genres, and a quick summary of the plot.

### How it's built (Tech Stack):
I tried to keep things modern and fast, so here's what I used under the hood:
- **React & Vite** for the core frontend setup.
- **Tailwind CSS (v4)** and **DaisyUI** for styling (makes creating components super easy!).
- **Framer Motion** (`motion/react`) for those smooth hover and entrance animations.
- **React Router** to handle the navigation between pages.
- **React Icons** for the little visual details.

### Where is the data coming from?
All the movie and TV show data comes from the awesome (and free!) [TVMaze API](https://www.tvmaze.com/api).

Specifically, I used these two endpoints:
- `GET https://api.tvmaze.com/shows` 
  *(This fetches the default list of shows you see when you first load the page)*
- `GET https://api.tvmaze.com/search/shows?q=:query` 
  *(This handles the live search functionality whenever you type in a movie name)*

---
Feel free to poke around the code or try out the live site!
