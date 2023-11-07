# Ghibliotheque - Les films du studio Ghibli

Website displaying the movies of the studio Ghibli.🐉 ⛩️ 🎞

This was one of my first projects in NodeJS. My objectif was to learn the fondamentals of JavaScript on server side using Express. As templating language, I used EJS.

## Features
- Route `/` Home page
- Route `/films` List of all the movies generated from a Json file. I decided to display the name and the picture only.
- Route `/film/:id` Page of one selected movie. Here, we can find detailed information about the movie : title, original title, description, director, release date, duration.
- Route GET `/search` Search engine to find a movie by two letters. The result is a list of movies containing the searched term.
- 404 Page when user tries to access a non declared route.
- Route POST `/login` allows the user to enter a username and displays a welcome message.


## Technologies
JavaScript
Express
EJS

## Screenshots
### HomePage
![home](https://github.com/Cristina-fruitsPunchSamurai/ghibliotheque/assets/108081381/4cc3081b-dbe0-4280-89e4-0ad4afc2bc00)

### Search
![recherche-film](https://github.com/Cristina-fruitsPunchSamurai/ghibliotheque/assets/108081381/b3c0d267-1253-4879-a76a-acea9fe53dfb)

### 404
![404page](https://github.com/Cristina-fruitsPunchSamurai/ghibliotheque/assets/108081381/e66c5559-0624-4044-827b-9e56a9bb84bb)
